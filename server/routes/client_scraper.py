from flask import Flask, Blueprint, request, jsonify
from dateutil import parser
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options
import time
import os
from pprint import pprint

def searchcasedetails(driver: webdriver.Firefox):
    client_name = driver.find_element(By.XPATH, f"//*[contains(@id, 'lblCaseTitle')]").text
    age_and_birth_place = driver.find_element(By.ID, 'lblText1').text
    client_age = age_and_birth_place.split(' Year Old')[0] 
    client_birth_place = age_and_birth_place.split('from ')[1]
    violation_date = driver.find_element(By.ID, 'lblText2').text

    try:
        int(client_age)
    except:
        #Null value placeholder for records where age is not present
        client_age = -1

    data = driver.find_element(By.CLASS_NAME, 'caseItem').text
    data = data.split('\n')
    data = [col for col in data if col != '']
    court_info_start_index = data.index('Court Information')
    
    try:
        violation_info_start_index = data.index('Violation Information') + 1
    except:
        violation_info_start_index = 0
        for i, d in enumerate(data[:court_info_start_index][::-1]):
            if ' - ' not in d:
                violation_info_start_index = i
                break

    # [print(i, d) for i, d in enumerate(data)]

    violation_numbers = data[violation_info_start_index: court_info_start_index]

    context = {
        'fax_number': data[-2].split('Fax:')[-1],
        'phone_number':data[-3].split('Phone:')[-1],
        'court_house_name': data[-7],
        'court_house_street': data[-5],
        'court_house_city': ' '.join(data[-4].split(' ')[:-2]),
        'court_house_state': data[-4].split(' ')[-2],
        'court_house_zip': data[-4].split(' ')[-1],
        'court_county': data[-6],
        'client_name': client_name,
        'client_age':client_age,
        'client_birth_place':' '.join([d for d in client_birth_place.split(' ') if '-' not in d]),
        'violation_date': violation_date,
        'violation_numbers': violation_numbers
    }
    return context


def image_exists(driver: webdriver.Firefox, img: str):
    images = driver.find_elements(By.TAG_NAME, 'img')
    for image in images:
        if img in image.get_attribute('src'):
            return True
    return False

def get_image_by_src(driver: webdriver.Firefox, img: str):
    images = driver.find_elements(By.TAG_NAME, 'img')
    for image in images:    
        if img in image.get_attribute('src'):
            return image
    return None

def casedetailscontacts(driver: webdriver.Firefox):
    client_name = driver.find_element(By.ID, 'ucCaseInformationControl1_lblCaseTitle').text
    violation_date = driver.find_element(By.ID, 'ucCaseInformationControl1_lblTimeStamp').text
    parsed_date = parser.parse(violation_date)
    violation_date = parsed_date.strftime(DATE_FORMAT)

    tables = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.sup_perFirst.nobg'))
    )

    client_phone_number = ''
    phone_img = 'images/icons/caseDetails/mobile_14.png'
    if image_exists(driver, phone_img):
        client_phone_number = get_image_by_src(driver, phone_img).find_element(By.XPATH, '..').text

    client_email = ''
    email_img = 'images/icons/caseDetails/email_14.png'
    if image_exists(driver, email_img):
        client_email = get_image_by_src(driver, email_img).find_element(By.XPATH, '..').text

    client_age = ''
    age_img = 'images/icons/caseDetails/calender_14.png'
    if image_exists(driver, age_img):
        client_age = tables[0].find_elements(By.TAG_NAME, 'tr'
            )[1].text.split(' Years Old)')[0].split('(')[1]
        
    client_birth_place = driver.find_element(By.CSS_SELECTOR, '.pAdd.wrapText').text.split('\n')[-1]
    client_birth_place = ' '.join(client_birth_place.split(',')[:-1])

    court_info_table = tables[-1]
    court_data = court_info_table.find_elements(By.TAG_NAME, 'tr')
    court_house_name = court_data[0].find_element(By.TAG_NAME, 'td').text.rstrip()
    court_house_street = court_data[1].text

    city_info = court_data[2].text.split(', ')
    court_house_city = city_info[0]
    court_house_state = city_info[1]
    court_house_zip = city_info[2].replace('.', '')

    court_county = court_data[3].text.split(' .')[0]
    phone_number = court_data[4].text

    menu = driver.find_element(By.ID, 'caseDetailsMenu')
    menu.find_element(By.CLASS_NAME, 'iCharge').click()

    charges_table = driver.find_element(By.ID, 'contentBody_gvCharges')
    charges = charges_table.find_elements(By.CLASS_NAME, 'wrapText')
    violation_numbers = []

    for charge in charges:
        violation_info = charge.find_element(
            By.TAG_NAME, 'tr').find_element(By.TAG_NAME, 'td')
        violation_info = violation_info.text.split('\n')
        violation_number = violation_info[0].split('|')[0]
        violation_description = violation_info[1].split('   ')[0]
        violation = f'{violation_number} {violation_description}'
        print(violation)
        violation_numbers.append(violation)

    context = {
        'phone_number': phone_number,
        'court_house_name': court_house_name,
        'court_house_street': court_house_street,
        'court_house_city':court_house_city,
        'court_house_state': court_house_state,
        'court_house_zip': court_house_zip,
        'court_county': court_county,
        'client_name': client_name,
        'client_email': client_email,
        'client_age': client_age,
        'client_birth_place': client_birth_place,
        'client_phone_number': client_phone_number,
        'violation_date': '',
        'violation_numbers': violation_numbers,
    }
    return context

DATE_FORMAT = '%b %d, %Y'

app = Flask(__name__)
client_scraper_bp = Blueprint('client_scraper', __name__)

@client_scraper_bp.post('/search')
def search():

    try:
        driver = None
                
        data = request.json  # Get data from JSON request
        # data = {'client_name': 'robert alfonso', 'crime_type': 'NJ Traffic'}
        client_name = data.get('client_name')
        crime_type = data.get('crime_type')

        print(f'SEARCHING - {client_name}, {crime_type}')

        if client_name and crime_type:
            
            options = webdriver.FirefoxOptions()
            options.add_argument('--headless')
            options.add_argument('--disable-gpu')  # Required for headless mode on Linux

            # Set the environment variable for headless mode
            os.environ['MOZ_HEADLESS'] = '1'

            # # Initialize the WebDriver with the specified options
            driver = webdriver.Firefox()

            # Navigate to the login page
            driver.get('https://secure.legalplex.com/Login')

            username_input = driver.find_element(By.ID, 'contentMainBody_txtEmailID')
            password_input = driver.find_element(By.ID, 'contentMainBody_txtPassword')
            login_button = driver.find_element(By.ID, 'contentMainBody_btnSubmit')

            username_input.send_keys(os.getenv('SCRAPER_USERNAME'))
            password_input.send_keys(os.getenv('SCRAPER_PASSWORD'))
            
            login_button.click()

            matches = []
            datasets = []

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
                if category.text == crime_type:
                    category.click()
                    break

            search_button = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_btnSubmit')
            search_button.click()

            #get number of pages
            try:
                pages_container = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, 'pgr'))
                )
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

                for case in cases:
                    name = case.find_element(By.CLASS_NAME, 'name')
                    profile_url = name.get_attribute('href')
                    if profile_url not in matches:
                        matches.append(profile_url)
                        print(f'adding {profile_url} to matches...')                        

                #click through each page, if on last page don't try to click to next page
                if last_page == page_i:
                    continue

                pages_container = driver.find_element(By.CLASS_NAME, 'pgr')
                pages_table = pages_container.find_element(By.TAG_NAME, 'table')
                pages = pages_table.find_elements(By.TAG_NAME, 'td')
                page = pages[page_i].find_element(By.TAG_NAME, 'a')
                time.sleep(1)
                page.click()

            #loop through each match and collect data from page
            for match in matches:
                print(f'Collecting data from: {match}')

                driver.get(match)

                time.sleep(1)
                if 'casedetailscontacts' in driver.current_url:
                    context = casedetailscontacts(driver)
                elif 'searchcasedetails' in driver.current_url:
                    context = searchcasedetails(driver)

                # Prepare data for JSON response
                scraped_data = {
                    "court_info": {
                        "fax_number": context.get('fax_number'),
                        "phone_number": context.get('phone_number'),
                        "court_house_name": context.get('court_house_name'),
                        "court_house_street": context.get('court_house_street'),
                        "court_house_city": context.get('court_house_city'),
                        "court_house_state": context.get('court_house_state'),
                        "court_house_zip": context.get('court_house_zip'),
                        "court_county": context.get("court_county"),
                        'crime_type': crime_type,
                    },
                    "client_info": {
                        "client_name": context.get('client_name'),
                        "client_age": context.get('client_age'),
                        "client_birth_place": context.get('client_birth_place'),
                        "client_email": context.get('client_email'),
                        'client_phone_number': context.get('client_phone_number'),
                        'violation_date': context.get("violation_date")
                    },
                    "violations": context.get("violation_numbers"),  # Add more data as needed
                }
                datasets.append(scraped_data)
            return jsonify({"status": "success", "data": datasets})
            
    except Exception as e:
        return jsonify({"status": "error", "error": str(e)})

    finally:
        if driver is not None:
            driver.quit()
