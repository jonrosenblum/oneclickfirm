from flask import Blueprint, request, jsonify, send_from_directory
import zipfile
import tempfile
from docxtpl import DocxTemplate
import os
from os.path import expanduser
import base64
import psycopg2
import psycopg2.extras
from flask_jwt_extended import jwt_required



# Connect to the PostgreSQL database

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
# @jwt_required()
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
        'incident_date': form_data['incident_date'],
        'case_status': form_data['case_status'].upper(),
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
    
    # Read the generated DOCX files as binary data and encode them in base64
    with open(discovery_output_path_docx, 'rb') as discovery_file:
        discovery_doc_data = base64.b64encode(discovery_file.read()).decode('utf-8')
    with open(representation_output_path_docx, 'rb') as representation_file:
        representation_doc_data = base64.b64encode(representation_file.read()).decode('utf-8')
    with open(retainer_output_path_docx, 'rb') as retainer_file:
        retainer_doc_data = base64.b64encode(retainer_file.read()).decode('utf-8')


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
    'incident_date': form_data['incident_date'],
    'case_status': form_data['case_status'].upper(),
    'discovery_docx': discovery_doc_data,
    'representation_docx': representation_doc_data,
    'retainer_docx': retainer_doc_data,
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

    # Read the generated DOCX files as binary data
    with open(discovery_output_path_docx, 'rb') as discovery_file:
        discovery_doc_data = discovery_file.read()
    with open(representation_output_path_docx, 'rb') as representation_file:
        representation_doc_data = representation_file.read()
    with open(retainer_output_path_docx, 'rb') as retainer_file:
        retainer_doc_data = retainer_file.read()

    # Insert form data and document binary data into the database
    cursor.execute(
        "INSERT INTO client_information (client_name, court_house_name, court_house_street, court_house_city, court_house_state, court_house_zip, fax_number, court_house_county, complaint_number, incident_date, date_created, case_status, discovery_docx, representation_docx, retainer_docx) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
        (form_data['client_name'], form_data['court_house_name'], form_data['court_house_address'], form_data['court_house_city'], form_data['court_house_state'], form_data['court_house_zip'], form_data['fax_number'], form_data['court_house_county'], form_data['complaint_violation_ticket_numbers'], form_data['incident_date'], form_data['todays_date'], form_data['case_status'], discovery_doc_data, representation_doc_data, retainer_doc_data))

    # Commit the transaction and close the cursor
    conn.commit()
    cursor.close()

    return jsonify({"message": "Documents generated and data stored successfully"})


@document_templates_bp.route('/get-documents', methods=['GET'])
def get_documents():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM client_information")
    documents = cursor.fetchall()
    cursor.close()

    # Create a list to store the document data
    document_data = []

    for document in documents:
        document_data.append({
        "client_id": document[0],
        "client_name": document[1],
        "court_house_name": document[2],
        "court_house_street": document[3],
        "court_house_city": document[4],
        "court_house_state": document[5],
        "court_house_zip": document[6],
        "fax_number": document[7],
        "court_house_county": document[8],
        "complaint_number": document[9],
        "incident_date": document[10],
        "todays_date": document[11],
        "status": document[12],
        "discovery_docx": base64.b64encode(document[13]).decode('utf-8') if document[13] is not None else None,
        "representation_docx": base64.b64encode(document[14]).decode('utf-8') if document[14] is not None else None,
        "retainer_docx": base64.b64encode(document[15]).decode('utf-8') if document[15] is not None else None
    })

    return jsonify(document_data)

@document_templates_bp.route('/get-clients', methods=['GET'])
def get_clients():
    cursor = conn.cursor()
    # Modify the SQL query to retrieve the required information
    cursor.execute("SELECT client_name, incident_date, court_house_county, court_house_state, case_status FROM client_information")
    client_data = cursor.fetchall()
    cursor.close()

    # Create a list of dictionaries with the required data
    client_info_list = []
    for row in client_data:
        client_info = {
            "client_name": row[0],
            "incident_date": row[1],
            "court_house_county": row[2],
            "court_house_state": row[3],
            "case_status": row[4],
        }
        client_info_list.append(client_info)

    return jsonify(client_info_list)

@document_templates_bp.route('/download-documents/<int:client_id>', methods=['GET'])
def download_documents(client_id):
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cursor.execute("SELECT * FROM client_information WHERE id = %s", (client_id,))
    client_data = cursor.fetchone()
    cursor.close()

    if client_data is None:
        return jsonify({"error": "Client not found."}), 404

    # Define the document name for download
    client_name = client_data[1]
    document_name = f"{client_name}_documents.zip"  # Creating a ZIP file to contain all documents

    # Create a temporary directory to store the individual documents
    temp_dir = tempfile.mkdtemp()
    print({'temp_dir': temp_dir})

    # Determine which documents to include in the ZIP file
    documents_to_include = {
        'discovery.docx': client_data['discovery_docx'],  # Replace with actual column names
        'representation.docx': client_data['representation_docx'],  # Replace with actual column names
        'retainer.docx': client_data['retainer_docx'],  # Replace with actual column names
    }

    with zipfile.ZipFile(os.path.join(temp_dir, document_name), 'w', zipfile.ZIP_DEFLATED) as zipf:
        for doc_name_key, doc_data in documents_to_include.items():
            if doc_data is None:
                continue;
            
            doc_name = f"{client_name}_{doc_name_key}"
            
        #    # Write the document to the temporary directory
            with open(os.path.join(temp_dir, doc_name), 'wb') as f:
                f.write(doc_data)
            zipf.write(os.path.join(temp_dir, doc_name), arcname=doc_name_key)

    # Send the ZIP file containing all documents as a file attachment
    return send_from_directory(temp_dir, document_name, as_attachment=True)

