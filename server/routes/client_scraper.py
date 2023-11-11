from flask import Flask, Blueprint, request, jsonify
from dateutil import parser
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import os
from dotenv import load_dotenv
import psycopg2 as pc

load_dotenv()

DATE_FORMAT = '%b %d, %Y'

app = Flask(__name__)

class DB:

    def __init__(self) -> None:
        username = os.getenv('DB_USERNAME')
        password = os.getenv('DB_PASSWORD')
        host = os.getenv('DB_HOST')
        port = os.getenv('DB_PORT')
        self.db_name = os.getenv('DB_NAME')
        db_url = f'postgresql://{username}:{password}@{host}:{port}'
        
        try:
            db_url_with_db_name = db_url + f'/{self.db_name}'
            self.conn = pc.connect(db_url_with_db_name)
            self.cursor = self.conn.cursor()
            db_url = db_url_with_db_name  
        except pc.OperationalError:
            #if database does not exist, create database and reconnect
            self.conn = pc.connect(db_url)
            self.cursor = self.conn.cursor()
            self.conn.autocommit = True
            self.create_database()
            self.conn.close()
            self.__init__()
        print(f'DB URL - {db_url}')

        #create tables if not exists
        self.create_templates_table()
        self.create_clients_table() 
        self.create_violations_table()

    def drop_database(self) -> None:
        sql = f'''
        DROP DATABASE "{self.db_name}"
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_database(self) -> None:
        print('CREATING DATABASE...')
        sql = f'''
        CREATE DATABASE  "{self.db_name}"
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_templates_table(self) -> None:
        sql = '''
        CREATE TABLE IF NOT EXISTS template (
            template_id SERIAL PRIMARY KEY,
            name VARCHAR,
            pdf_data BYTEA
        );
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_clients_table(self) -> None:
        #NOT SAVING TODAYS DATE
        sql = '''
        CREATE TABLE IF NOT EXISTS client (
            client_id SERIAL PRIMARY KEY,
            fax_number VARCHAR,
            phone_number VARCHAR,
            court_house_name VARCHAR,
            court_house_street VARCHAR,
            court_house_city VARCHAR,
            court_house_state VARCHAR,
            court_house_zip VARCHAR,            
            client_name VARCHAR,
            client_age SMALLINT,
            client_birth_place VARCHAR
        );
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_violations_table(self) -> None:
        sql = f'''
        CREATE TABLE IF NOT EXISTS violation (
            client_id INTEGER,
            violation_number VARCHAR NOT NULL,
            FOREIGN KEY(client_id) REFERENCES client(client_id)
        );
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def get_client_id(self, data) -> int:
        sql = '''
        SELECT client_id
        FROM "client"
        WHERE client_name = %s
            AND client_age = %s
            AND client_birth_place = %s
        '''
        self.cursor.execute(sql, data)
        result = self.cursor.fetchone()
        if type(result) == tuple:
            return result[0]
        return None

    def insert_client_info(self, data:dict) -> None:
        sql = '''
        INSERT INTO "client" ({})
        VALUES ({})
        '''

        placeholders = ', '.join(['%s' for _ in data.values()])
        values = tuple(data.values())
        columns = ', '.join(data.keys())

        query = sql.format(columns, placeholders)
        self.cursor.execute(query, values)
        self.conn.commit()
        
    def insert_violation(self, client_id:int, violation_number:str) -> None:
        sql = '''
        INSERT INTO "violation"(client_id, violation_number)
        SELECT %s, %s
        WHERE 
            NOT EXISTS (
                SELECT violation_number 
                FROM "violation" 
                WHERE violation_number = %s
            ) 
        '''
        self.cursor.execute(sql, (client_id, violation_number, violation_number))
        self.conn.commit()

# Create Flask Blueprint
client_scraper_bp = Blueprint('client_scraper', __name__)

@client_scraper_bp.route('/client-scraper', methods=['GET'])
def client_scraper():
    return "Web Crawler Backend"

@client_scraper_bp.post('/search')
def search():
    
    data = request.json  # Get data from JSON request
    client_name = data.get('client_name')
    violation_date = data.get('violation_date')

    #format date so that it matches the format on legalplex 
    parsed_date = parser.parse(violation_date)
    violation_date = parsed_date.strftime(DATE_FORMAT)
    
    if client_name and violation_date:
        
        driver = webdriver.Firefox()

        # Navigate to the login page
        driver.get('https://secure.legalplex.com/Login')

        username_input = driver.find_element(By.ID, 'contentMainBody_txtEmailID')
        password_input = driver.find_element(By.ID, 'contentMainBody_txtPassword')
        login_button = driver.find_element(By.ID, 'contentMainBody_btnSubmit')

        username_input.send_keys(os.getenv('SCRAPER_USERNAME'))
        password_input.send_keys(os.getenv('SCRAPER_PASSWORD'))
        
        login_button.click()

        values = ['NJ Traffic', 'NJ Criminal (DP)']
        profile_urls = []

        for value in values:
            driver.get('https://secure.legalplex.com/searchcases')
            
            name_input = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_txtSearchText')
            name_input.clear()
            name_input.send_keys(client_name)

            #select category
            expand_categories_button = driver.find_element(By.XPATH, '/html/body/form/div[3]/div[3]/div[2]/div[1]/div[2]/div[2]/table[1]/tbody/tr/td[2]/div/div/a')
            expand_categories_button.click()
            categories_ul = driver.find_element(By.XPATH, '/html/body/form/div[3]/div[3]/div[2]/div[1]/div[2]/div[2]/table[1]/tbody/tr/td[2]/div/ul')
            categories = categories_ul.find_elements(By.TAG_NAME, 'li')

            for category in categories:
                if category.text == value:
                    category.click()
                    break

            search_button = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_btnSubmit')
            search_button.click()

            #get number of pages
            try:
                pages_container = driver.find_element(By.CLASS_NAME, 'pgr')
                pages = pages_container.find_elements(By.TAG_NAME, 'a')
                last_page = int(pages[-1].text)
            except:
                last_page = 1

            #loop through each page, then each record
            for page_i in range(1, last_page+1):
                
                try:
                    cases_table = driver.find_element(By.ID, 'contentMainbody_gvSearch')
                    cases = cases_table.find_elements(By.TAG_NAME, 'tr')
                    for i, case in enumerate(cases):
                        if 'pgr' in case.get_attribute('class'):
                            cases = cases[:i]
                except:
                    cases = []

                for case_i, case in enumerate(cases):
                    date = case.find_element(By.XPATH, f'/html/body/form/div[3]/div[3]/div[2]/div[2]/div[2]/div[1]/table/tbody/tr[{case_i+1}]/td/div[1]/div[2]/h5[1]')
                    if violation_date in date.text:
                        print('MATCH!')
                        profile_url = case.find_element(By.CLASS_NAME, 'name').get_attribute('href')
                        if profile_url not in profile_urls:
                            profile_urls.append(profile_url)

                #click through each page, if on last page don't try to click to next page
                if last_page == page_i:
                    continue

                pages_container = driver.find_element(By.CLASS_NAME, 'pgr')
                pages_table = pages_container.find_element(By.TAG_NAME, 'table')
                pages = pages_table.find_elements(By.TAG_NAME, 'td')
                page = pages[page_i].find_element(By.TAG_NAME, 'a')
                time.sleep(3)
                page.click()
   
        #only instantiate class if there is records to save
        if len(profile_urls) > 0:
            db = DB()

        #loop through each match and collect data from page
        print('#'*45)
        for profile_url in profile_urls:
            print(f'Collecting data from: {profile_url}')
 
            driver.get(profile_url)
            content = driver.find_element(By.CLASS_NAME, 'content')

            client_name = content.find_element(By.ID, 'lblCaseTitle').text
            age_and_birth_place = content.find_element(By.ID, 'lblText1').text
            client_age = age_and_birth_place.split(' Year Old')[0] 
            client_birth_place = age_and_birth_place.split('from ')[1]

            try:
                int(client_age)
            except:
                #Null value placeholder for records where age is not present
                client_age = -1

            data = content.find_element(By.CLASS_NAME, 'caseItem').text
            data = data.split('\n')
            data = [col for col in data if col not in ['', 'Violation Information']]
            court_info_start_index = data.index('Court Information')

            violation_numbers = [violation.split(' ')[0] for violation in data[2: court_info_start_index]]

            i = court_info_start_index - 2
            context = {
                'fax_number': data[8+i].split('Fax:')[-1],
                'phone_number':data[7+i].split('Phone:')[-1],
                'court_house_name': data[3+i],
                'court_house_street': data[5+i],
                'court_house_city': data[6+i].split(' ')[0],
                'court_house_state': data[6+i].split(' ')[1],
                'court_house_zip': data[6+i].split(' ')[-1],
                'client_name': client_name,
                'client_age':client_age,
                'client_birth_place':client_birth_place
            }

            client_id = db.get_client_id((
                context['client_name'],
                context['client_age'],
                context['client_birth_place']
            ))

            if client_id == None:
                db.insert_client_info(context)
                client_id = db.get_client_id((
                    context['client_name'],
                    context['client_age'],
                    context['client_birth_place']
                ))

            print(f'Client ID: {client_id}')
            for violation_number in violation_numbers:
                print(f'INSERTING {violation_number} (IF NOT EXISTS)')
                db.insert_violation(client_id, violation_number)
            print('#'*45)
            
        driver.quit()
        return jsonify({"status": "success"})  # Adjust as needed


if __name__ == '__main__':
    # Initialize Flask app with Blueprint
    app.register_blueprint(client_scraper_bp)

    # Run Flask app
    app.run(debug=True)
    # Initialize the database class
    db = DB()
    # Call the search function
    search()
