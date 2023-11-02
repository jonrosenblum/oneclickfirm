from flask import Blueprint, request
# from dateutil import parser
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# import time
# import os
# from dotenv import load_dotenv
# from template import DB

# load_dotenv()

# DATE_FORMAT = '%b %d, %Y'

client_scraper_bp = Blueprint('client_scraper', __name__)

@client_scraper_bp.route('/client-scraper', methods=['GET'])
def client_scraper():
    return "Web Crawler Backend"

# @client_scraper_bp.post('/search')
# def search():
    
#     data = request.json
#     # data = {'client_name':'James smith', 'violation_date': 'Sep 20, 2023'} 
#     client_name = data.get('client_name')

#     violation_date = data.get('violation_date')
#     #format date so that it matches the format on legalplex 
#     parsed_date = parser.parse(violation_date)
#     violation_date = parsed_date.strftime(DATE_FORMAT)
    
#     if client_name and violation_date:
        
#         driver = webdriver.Firefox()

#         # Navigate to the login page
#         driver.get('https://secure.legalplex.com/Login')

#         username_input = driver.find_element(By.ID, 'contentMainBody_txtEmailID')
#         password_input = driver.find_element(By.ID, 'contentMainBody_txtPassword')
#         login_button = driver.find_element(By.ID, 'contentMainBody_btnSubmit')

#         username_input.send_keys(os.getenv('SCRAPER_USERNAME'))
#         password_input.send_keys(os.getenv('SCRAPER_PASSWORD'))
        
#         login_button.click()

#         values = ['NJ Traffic', 'NJ Criminal (DP)']
#         profile_urls = []

#         for value in values:
#             driver.get('https://secure.legalplex.com/searchcases')
            
#             name_input = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_txtSearchText')
#             name_input.clear()
#             name_input.send_keys(client_name)

#             #select category
#             expand_categories_button = driver.find_element(By.XPATH, '/html/body/form/div[3]/div[3]/div[2]/div[1]/div[2]/div[2]/table[1]/tbody/tr/td[2]/div/div/a')
#             expand_categories_button.click()
#             categories_ul = driver.find_element(By.XPATH, '/html/body/form/div[3]/div[3]/div[2]/div[1]/div[2]/div[2]/table[1]/tbody/tr/td[2]/div/ul')
#             categories = categories_ul.find_elements(By.TAG_NAME, 'li')

#             for category in categories:
#                 if category.text == value:
#                     category.click()
#                     break

#             search_button = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_btnSubmit')
#             search_button.click()

#             #get number of pages
#             try:
#                 pages_container = driver.find_element(By.CLASS_NAME, 'pgr')
#                 pages = pages_container.find_elements(By.TAG_NAME, 'a')
#                 last_page = int(pages[-1].text)
#             except:
#                 last_page = 1

#             #loop through each page, then each record
#             for page_i in range(1, last_page+1):
    
#                 cases_odd = driver.find_elements(By.CLASS_NAME, 'caseItem')
#                 cases_even = driver.find_elements(By.CLASS_NAME, 'caseItemalt')
                
#                 cases = cases_odd + cases_even

#                 for case_i, case in enumerate(cases):
#                     date = case.find_element(By.XPATH, f'/html/body/form/div[3]/div[3]/div[2]/div[2]/div[2]/div[1]/table/tbody/tr[{case_i+1}]/td/div[1]/div[2]/h5[1]')
#                     if violation_date in date.text:
#                         print('MATCH!')
#                         profile_url = case.find_element(By.CLASS_NAME, 'name').get_attribute('href')
#                         if profile_url not in profile_urls:
#                             profile_urls.append(profile_url)

#                 #click through each page, if on last page don't try to click to next page
#                 if last_page == page_i:
#                     continue

#                 pages_container = driver.find_element(By.CLASS_NAME, 'pgr')
#                 pages_table = pages_container.find_element(By.TAG_NAME, 'table')
#                 pages = pages_table.find_elements(By.TAG_NAME, 'td')
#                 page = pages[page_i].find_element(By.TAG_NAME, 'a')
#                 time.sleep(3)
#                 page.click()
   

#         #only instantiate class if there is records to save
#         if len(profile_urls) > 0:
#             db = DB()

#         #loop through each match and collect data from page
#         for profile_url in profile_urls:
#             driver.get(profile_url)
#             name = driver.find_element(By.ID, 'lblCaseTitle').text
            
#             name_partitions = name.split(' ')
#             name_dict = {
#                 'forename':name_partitions[0],
#                 'surname':name_partitions[-1]
#             }

#             if len(name_partitions) > 2:
#                 name_dict.update({'middle_initial':name_partitions[1]})

#             print('saving', name)
#             db.insert_client_info(name_dict)
            
#         driver.quit()


# if __name__ == '__main__':
#     search()