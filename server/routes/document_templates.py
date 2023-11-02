from flask import Blueprint, request, jsonify
from docxtpl import DocxTemplate
import os
from os.path import expanduser
import psycopg2

conn = psycopg2.connect(
    host="localhost",
    user="jonrosenblum",
    password="Jnrsnblm1!",
    port="5432",
    database="jonrosenblum"
)


document_templates_bp = Blueprint('document_templates', __name__)

@document_templates_bp.route('/generate', methods=['GET'])
def documents():
    return "Documents Backend!"

@document_templates_bp.route('/generate-documents', methods=['POST'])
def generate_documents():
    form_data = request.get_json()  # Get form data from the POST request
    cursor = conn.cursor()
    # Get the desktop path for the current user
    desktop_path = os.path.join(expanduser("~"), "Desktop")

    # Modify the client name to remove spaces
    client_name = form_data['client_name'].replace(" ", "")

    # Create a subfolder with the client's name on the desktop
    client_folder = os.path.join(desktop_path, client_name)

    # Ensure the client folder exists, or create it if not
    os.makedirs(client_folder, exist_ok=True)

    # Load the Word document templates based on 'dwi_status'
    template_folder = os.path.abspath("templates")

    if form_data.get('dwi_status') == 'Yes':
        # Load DWI Discovery Template
        discovery_template_path = os.path.join(template_folder, "dwidiscoverytemplate.docx")
    else:
        # Load Regular Discovery Template
        discovery_template_path = os.path.join(template_folder, "discoveryTemplate.docx")

    representation_template_path = os.path.join(template_folder, "representationTemplate.docx")
    retainer_template_path = os.path.join(template_folder, "retainerTemplate.docx")

    discovery_doc = DocxTemplate(discovery_template_path)
    representation_doc = DocxTemplate(representation_template_path)
    retainer_doc = DocxTemplate(retainer_template_path)

    print(form_data['complaint_violation_ticket_numbers'])
    # Define the context dictionary using form data
    context = {
        'fax_number': form_data['fax_number'],
        'todays_date': form_data['todays_date'],
        'court_house_name': form_data['court_house_name'],
        'court_house_street': form_data['court_house_address'],
        'court_house_city': form_data['court_house_city'],
        'court_house_state': form_data['court_house_state'],
        'court_house_zip': form_data['court_house_zip'],
        'client_name': form_data['client_name'].upper(),
        'court_house_county': form_data['court_house_county'].upper(),
        'court_house_name_upper': form_data['court_house_name'].upper(),
        'complaint_number': form_data['complaint_violation_ticket_numbers'].replace(",", " ").upper(),
        'court_house_name': form_data['court_house_name'],
        'incident_date': form_data['todays_date'],
    }

    # Render the documents with the provided context
    discovery_doc.render(context)
    representation_doc.render(context)
    retainer_doc.render(context)

    # Define the output file paths for DOCX files inside the client's folder
    discovery_output_path_docx = os.path.join(client_folder, f"{client_name}_discovery.docx")
    representation_output_path_docx = os.path.join(client_folder, f"{client_name}_representation.docx")
    retainer_output_path_docx = os.path.join(client_folder, f"{client_name}_retainer.docx")

    # Save the filled-in DOCX files
    discovery_doc.save(discovery_output_path_docx)
    representation_doc.save(representation_output_path_docx)
    retainer_doc.save(retainer_output_path_docx)
    
    # Insert form data and document file paths into the database
    cursor.execute(
        "INSERT INTO client_documents (client_name, todays_date, court_house_name, discovery_docx_path, representation_docx_path, retainer_docx_path) VALUES (%s, %s, %s, %s, %s, %s)",
        (form_data['client_name'], form_data['todays_date'], form_data['court_house_name'], discovery_output_path_docx, representation_output_path_docx, retainer_output_path_docx)
    )

    # Commit the transaction and close the cursor
    conn.commit()
    cursor.close()

    return jsonify({"message": "Documents generated and data stored successfully"})

@document_templates_bp.route('/get-documents', methods=['GET'])
def get_documents():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM client_documents")
    documents = cursor.fetchall()
    cursor.close()
        # You can return the client documents data as JSON to your frontend
    client_documents = []
    for document in documents:
        client_documents.append({
            "id": document[0],
            "client_name": document[1],
            "todays_date": document[2],
            "court_house_name": document[3],
            "discovery_docx_path": document[4],
            "representation_docx_path": document[5],
            "retainer_docx_path": document[6]
        })

    return jsonify(client_documents)

