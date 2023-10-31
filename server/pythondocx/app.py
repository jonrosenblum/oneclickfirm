from docxtpl import DocxTemplate
import random

# Load the Word document template

template_path = "./templates/discoveryteamplate.docx"
doc = DocxTemplate(template_path)

# Define a context dictionary with placeholders and their corresponding random values
context = {
    'fax_number': str(random.randint(1000000000, 9999999999)),  # Generate a random 10-digit number
    'todays_date': "2023-10-31",  # You can replace this with the actual date
    'court_name': "Jon Rosenblum's Court",
    'court_house_street': "1315 Club Drive",
    'court_house_city_state': "Hewlett, NY",
    'client_name': "John Rosenblum",
    'court county': "Nassau County",
    'complaint_number': "ABC123",
    'court': 'Turner Court'
    
    
}

# Render the document with the provided context
doc.render(context)

# Save the filled-in document to a new file in the same folder as the template
output_path = "templates/filled_discovery.docx"
doc.save(output_path)