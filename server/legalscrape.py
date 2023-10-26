from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

# Set up Firefox options for a headless browser
options = Options()
options.headless = True

# Initialize the web driver with the specified options
driver = webdriver.Firefox(executable_path='./geckodriver', options=options)

# Open the website
driver.get('https://secure.legalplex.com/Login')

# Find the username and password input fields by their IDs
username_input = driver.find_element(By.ID, 'contentMainBody_txtEmailID')
password_input = driver.find_element(By.ID, 'contentMainBody_txtPassword')

login_button = driver.find_element(By.ID, 'contentMainBody_btnSubmit')

username_input.send_keys('rmpinner@gmail.com')
password_input.send_keys('624Shields')
login_button.click()


# Once logged in, we need to navigate to the search cases page 
driver.get('https://secure.legalplex.com/searchcases')

# Find the search input fields by their ID
client_name_input = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_txtSearchText')
# category_input = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_ddlSearchType')

client_name_input.send_keys("Test")

# Close the browser when done
# driver.quit()
