import requests
import os
import json  # Add this line to import the json module

# Define the URL of the JSON endpoint
url = "https://data.nj.gov/resource/k9xb-zgh4.json"

# Define the file path
file_path = os.path.join("../src", "njdata.json")

try:
    # Send a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        # Write the JSON data to the file
        with open(file_path, "w") as file:
            file.write(json.dumps(data, indent=2))  # Use json.dumps to format the data

        print(f"Data has been written to {file_path}")

    else:
        print("Request failed with status code:", response.status_code)

except Exception as e:
    print("An error occurred:", str(e))
