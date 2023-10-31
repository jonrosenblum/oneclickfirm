from docxtpl import DocxTemplate
from docx2pdf import convert
import random
from io import BytesIO

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

# Define the output file paths for both DOCX and PDF files
output_folder = "templates/ClientDocuments/"
client_name = context['client_name']

discovery_output_path_docx = f"{output_folder}{client_name}_discovery.docx"
representation_output_path_docx = f"{output_folder}{client_name}_representation.docx"
retainer_output_path_docx = f"{output_folder}{client_name}_retainer.docx"
discovery_output_path_pdf = f"{output_folder}{client_name}_discovery.pdf"
representation_output_path_pdf = f"{output_folder}{client_name}_representation.pdf"
retainer_output_path_pdf = f"{output_folder}{client_name}_retainer.pdf"

# Save the filled-in DOCX files
discovery_doc.save(discovery_output_path_docx)
representation_doc.save(representation_output_path_docx)
retainer_doc.save(retainer_output_path_docx)

# Convert the Word documents to PDF
convert(discovery_output_path_docx)
convert(representation_output_path_docx)
convert(retainer_output_path_docx)

# Rename the converted PDF files to match the naming convention
import os

os.rename(f"{discovery_output_path_docx}.pdf", discovery_output_path_pdf)
os.rename(f"{representation_output_path_docx}.pdf", representation_output_path_pdf)
os.rename(f"{retainer_output_path_docx}.pdf", retainer_output_path_pdf)
