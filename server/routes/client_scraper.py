from flask import Blueprint, request
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


client_scraper_bp = Blueprint('client_scraper', __name__)

@client_scraper_bp.route('/client-scraper', methods=['GET'])
def client_scraper():
    return "Web Crawler Backend"

@client_scraper_bp.post('/search')
def search():
    
        data = request.json 
        client_name = data.get('client_name')
        violation_date = data.get('violation_date')
        
        if client_name and violation_date:
            
            options = Options()
            options.headless = True

            driver = webdriver.Firefox(executable_path='./geckodriver') #,options=options)

            # Navigate to the login page
            driver.get('https://secure.legalplex.com/Login')

    
            username_input = driver.find_element(By.ID, 'contentMainBody_txtEmailID')
            password_input = driver.find_element(By.ID, 'contentMainBody_txtPassword')
            login_button = driver.find_element(By.ID, 'contentMainBody_btnSubmit')

            username_input.send_keys('rmpinner@gmail.com')
            password_input.send_keys('624Shields')
            
            login_button.click()

            # Once logged in, we need to navigate to the search cases page
            driver.get('https://secure.legalplex.com/searchcases')
            
            

            # List of dropdown values to search
            dropdown_values = ['101', '102']

            for value in dropdown_values:
                client_name_input_field = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_txtSearchText')
                client_name_input_field.clear()  # Clear any previous search text
                client_name_input_field.send_keys(client_name)
                dropdown = Select(driver.find_element(By.ID, 'contentMainbody_usSearchControl11_ddlSearchType'))  # Locate the dropdown inside the loop

                dropdown.select_by_value(value)
                search_button = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_btnSubmit')
                search_button.click()
                
                time.sleep(5)
                
            driver.quit()



