from flask import Flask, request, jsonify
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello"

@app.route('/search', methods=['POST'])  # Use the correct decorator and specify the HTTP method
def search():
    try:
        data = request.json  # Extract data from Axios POST request

        client_name = data.get('client_name')
        violation_date = data.get('violation_date')
        

        if client_name:
            # Set up Firefox options for a headless browser
            options = Options()
            options.headless = True

            # Initialize the web driver with the specified options
            driver = webdriver.Firefox(executable_path='./geckodriver', options=options)

            # Open the website
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

            # Find the search input fields by their ID
            client_name_input = driver.find_element(By.ID, 'contentMainbody_usSearchControl11_txtSearchText')
            violation_date_input = driver.find_element(By.ID, '')
            
            ### WE NEED TO TARGET THE DROPDOWN MENU AND SELECT "NJ TRAFFIC" AND THEN CLICK SEARCH, if no results or results does not
            # match the user input (name and date have to match) THEN -->
            ### WE NEED TO TARGET THE DROPWN MENU AND SELECT "NJ CRIMINAL (DP)" AND THEN CLICK SEARCH 
            
            ### WHEN THE SEARCH CRITERIA MATCHES THE USER REQUEST WE NEED TO CLICK INTO THE CLIENT


            # Input the client name from the request
            client_name_input.send_keys(client_name)
            violation_date_input.send_keys(violation_date)

            # Close the browser when done
            driver.quit()

            return jsonify({'message': 'Search completed'})

        else:
            return jsonify({'error': 'Client name not provided'})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()