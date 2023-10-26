from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

options = Options()
options.headless = False

# Initialize the web driver with the specified options
driver = webdriver.Firefox(executable_path='./geckodriver', options=options)

# Open the website and login
driver.get('https://secure.legalplex.com/Login')

# Your login code here...
username_input = driver.find_element(By.ID, 'contentMainBody_txtEmailID')
password_input = driver.find_element(By.ID, 'contentMainBody_txtPassword')

login_button = driver.find_element(By.ID, 'contentMainBody_btnSubmit')

username_input.send_keys('rmpinner@gmail.com')
password_input.send_keys('624Shields')
login_button.click()

# Once logged in, we need to navigate to the search cases page
driver.get('https://secure.legalplex.com/searchcases')

# Input client name


# List of dropdown values to search
dropdown_values = ['101', '102']

for value in dropdown_values:
    client_name_input_field = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_txtSearchText')
    client_name_input_field.clear()  # Clear any previous search text
    client_name_input_field.send_keys("Ryan A Goode")
    dropdown = Select(driver.find_element(By.ID, 'contentMainbody_usSearchControl11_ddlSearchType'))  # Locate the dropdown inside the loop

    dropdown.select_by_value(value)
    search_button = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_btnSubmit')
    search_button.click()
    
    time.sleep(5)

# Close the browser when done
driver.quit()
