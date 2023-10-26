import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

class MySeleniumTests(unittest.TestCase):
    def setUp(self):
        options = Options()
        options.headless = True
        self.driver = webdriver.Firefox(executable_path='/path/to/geckodriver', options=options)

    def tearDown(self):
        self.driver.quit()
        
    def test_login_navigation(self):
        self.driver.get('https://secure.legalplex.com/Login')
        
        # Assertions to check that the login page elements are present
        self.assertTrue(self.driver.find_element(By.ID, 'contentMainBody_txtEmailID').is_displayed())
        self.assertTrue(self.driver.find_element(By.ID, 'contentMainBody_txtPassword').is_displayed())
        self.assertTrue(self.driver.find_element(By.ID, 'contentMainBody_btnSubmit').is_displayed())
    
        
        
if __name__ == '__main__':
    unittest.main()
