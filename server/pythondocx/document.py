from docxtpl import DocxTemplate
from docx2pdf import convert
import os

# Load the Word document template
discovery_template_path = "./templates/discoveryTemplate.docx"
representation_template_path = "./templates/representationTemplate.docx"
retainer_template_path = "./templates/retainerTemplate.docx"

discovery_doc = DocxTemplate(discovery_template_path)
representation_doc = DocxTemplate(representation_template_path)
retainer_doc = DocxTemplate(retainer_template_path)

# Define a context dictionary with placeholders and their corresponding random values
context = {
    'fax_number': "(732)-726-2361",
    'todays_date': "October, 31st 2023",
    'court_house_name': "Woodbridge Municipal Court",
    'court_house_street': "1 Main Street",
    'court_house_city': "Woodbridge",
    'court_house_state': "NJ",
    'court_house_zip': "07095",
    'client_name': "SUKHWINDE SINGH",
    'court_county_upper': "MIDDLESEX COUNTY",
    'complaint_number': "E23-022274",
    'court_name_upper': 'WOODBRIDGE'
}

# Render the document with the provided context
discovery_doc.render(context)
representation_doc.render(context)
retainer_doc.render(context)

# Define the output folder for both DOCX and PDF files
output_folder = "templates/ClientDocuments/"

# Create a subfolder with the client's name
client_name = context['client_name']
client_folder = os.path.join(output_folder, client_name)

# Ensure the client folder exists, or create it if not
os.makedirs(client_folder, exist_ok=True)

# Define the output file paths for DOCX and PDF files inside the client's folder
discovery_output_path_docx = os.path.join(client_folder, f"{client_name}_discovery.docx")
representation_output_path_docx = os.path.join(client_folder, f"{client_name}_representation.docx")
retainer_output_path_docx = os.path.join(client_folder, f"{client_name}_retainer.docx")
discovery_output_path_pdf = os.path.join(client_folder, f"{client_name}_discovery.pdf")
representation_output_path_pdf = os.path.join(client_folder, f"{client_name}_representation.pdf")
retainer_output_path_pdf = os.path.join(client_folder, f"{client_name}_retainer.pdf")

# Save the filled-in DOCX files
discovery_doc.save(discovery_output_path_docx)
representation_doc.save(representation_output_path_docx)
retainer_doc.save(retainer_output_path_docx)

# Define a function to convert DOCX to PDF using reportlab
def convert_to_pdf(docx_path, pdf_path):
    convert(docx_path, pdf_path)

# Convert the Word documents to PDF using reportlab
convert_to_pdf(discovery_output_path_docx, discovery_output_path_pdf)
convert_to_pdf(representation_output_path_docx, representation_output_path_pdf)
convert_to_pdf(retainer_output_path_docx, retainer_output_path_pdf)