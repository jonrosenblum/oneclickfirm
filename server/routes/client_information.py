from flask import Blueprint, request, jsonify, send_from_directory, g
from decouple import config 
import zipfile
import tempfile
from docxtpl import DocxTemplate
from datetime import datetime
import os
from os.path import expanduser
import base64
import psycopg2
import psycopg2.extras
from flask_jwt_extended import jwt_required



client_information_bp = Blueprint('clientInformation', __name__)

# Database configuration


try: 
    conn = psycopg2.connect(config('DATABASE_URL'))
except Exception as e:
    print("Error connecting to the database: ", str(e))
    conn = None 
    
    
# Check if the table exists, and create it if not
def create_tables_if_not_exist():
    if conn is not None:
        try:
            cursor = conn.cursor()

            # Create the client_information table
            cursor.execute("CREATE TABLE IF NOT EXISTS client_information (\
                client_id SERIAL PRIMARY KEY, \
                client_name VARCHAR(255), \
                client_email VARCHAR(255), \
                date_created DATE, \
                payment_type VARCHAR(255), \
                credit_card_type VARCHAR(255), \
                credit_card_number VARCHAR(20), \
                credit_card_expiration VARCHAR(10), \
                credit_card_cvv VARCHAR(4), \
                client_balance NUMERIC(10, 2), \
                ccauth_docx BYTEA, \
                discovery_docx BYTEA, \
                representation_docx BYTEA, \
                retainer_docx BYTEA \
            )")
            
            # Create the violations table
            cursor.execute("CREATE TABLE IF NOT EXISTS violations (\
                violation_id SERIAL PRIMARY KEY, \
                client_id INT, \
                case_status VARCHAR(20), \
                dwi_status VARCHAR(3), \
                complaint_number VARCHAR(255), \
                incident_date DATE, \
                FOREIGN KEY (client_id) REFERENCES client_information(client_id) ON DELETE CASCADE \
            )")

            # Create the court_information table
            cursor.execute("CREATE TABLE IF NOT EXISTS court_information (\
                court_id SERIAL PRIMARY KEY, \
                client_id INT, \
                fax_number VARCHAR(20), \
                court_house_name VARCHAR(255), \
                court_house_street VARCHAR(255), \
                court_house_city VARCHAR(255), \
                court_house_state VARCHAR(255), \
                court_house_zip VARCHAR(10), \
                court_house_county VARCHAR(255), \
                FOREIGN KEY (client_id) REFERENCES client_information(client_id) ON DELETE CASCADE \
            )")
            cursor.execute("CREATE TABLE IF NOT EXISTS client_notes (\
                notes_id SERIAL PRIMARY KEY, \
                client_id INT, \
                client_notes TEXT, \
                FOREIGN KEY (client_id) REFERENCES client_information(client_id) ON DELETE CASCADE \
            )")
            
            conn.commit()
            print("Tables created successfully.")
            cursor.close()
        except Exception as e:
            print("Error creating tables:", str(e))

create_tables_if_not_exist()


@client_information_bp.route('/new-client', methods=['POST'])
@jwt_required()
# @jwt_required()
def new_client():
    
    # create a new client
    # and generate docs and save to db
    form_data = request.get_json()  # Get form data from the POST request
    
    cursor = None
    try: 
        cursor = conn.cursor()
    except psycopg2.InterfaceError as e:
        conn = psycopg2.connect(config('DATABASE_URL'))
        cursor = conn.cursor()
    
    # Get the current date and time
        current_datetime = datetime.now()

        # Convert 'todays_date' to 'Month Day, Year' format for display in documents
        formatted_date = current_datetime.strftime('%B %d, %Y')
        
        # Insert form data and document binary data into the database
        # Insert data into the client_information table
        cursor.execute('''
            INSERT INTO client_information (client_name, client_email, date_created, payment_type, credit_card_type, credit_card_number, credit_card_expiration, credit_card_cvv, client_balance)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING client_id
        ''', (form_data['client_name'], form_data['client_email'], formatted_date, form_data['payment_type'], form_data['credit_card_type'], form_data['credit_card_number'], form_data['credit_card_expiration'], form_data['credit_card_cvv'], form_data['client_balance']))

        client_id = cursor.fetchone()[0]

        # Insert data into the violations table
        cursor.execute('''
            INSERT INTO violations (client_id, case_status, dwi_status, complaint_number, incident_date)
            VALUES (%s, %s, %s, %s, %s)
        ''', (client_id, form_data['case_status'], form_data['dwi_status'], form_data['complaint_violation_ticket_numbers'], form_data['incident_date']))

        # Insert data into the court_information table
        cursor.execute('''
            INSERT INTO court_information (client_id, fax_number, court_house_name, court_house_street, court_house_city, court_house_state, court_house_zip, court_house_county)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        ''', (client_id, form_data['fax_number'], form_data['court_house_name'], form_data['court_house_address'], form_data['court_house_city'], form_data['court_house_state'], form_data['court_house_zip'], form_data['court_house_county']))

        # Commit the transaction and close the cursor
        conn.commit()
        cursor.close()

        return jsonify({"message": "Documents generated and data stored successfully"})
    
    finally:
        if cursor is not None:
            cursor.close()
        if conn is not None and not conn.closed:
            conn.close()

def makeTempClientFiles(form_data,temp_dir, document_name):

    # Modify the client name to remove spaces
    client_name = form_data['client_name'].replace(" ", "")
    
    tempClientFolder = tempfile.mkdtemp(prefix=client_name)


    # Ensure the client folder exists, or create it if not
    os.makedirs(tempClientFolder, exist_ok=True)

    # Load the Word document templates based on 'dwi_status'
    template_folder = os.path.abspath("templates")

    if form_data.get('dwi_status') == 'Yes':
        # Load DWI Discovery Template
        discovery_template_path = os.path.join(template_folder, "dwidiscoverytemplate.docx")
    else:
        # Load Regular Discovery Template
        discovery_template_path = os.path.join(template_folder, "discoveryTemplate.docx")
    
    if form_data.get('payment_type') == 'Credit Card':
        # Load CC AUTH  Template
        credit_card_auth_path = os.path.join(template_folder, "ccauthTemplate.docx")
    else:
        # Load Regular Discovery Template
        credit_card_auth_path = os.path.join(template_folder, "zelleauthTemplate.docx")
        

    representation_template_path = os.path.join(template_folder, "representationTemplate.docx")
    retainer_template_path = os.path.join(template_folder, "retainerTemplate.docx")

    discovery_doc = DocxTemplate(discovery_template_path)
    representation_doc = DocxTemplate(representation_template_path)
    retainer_doc = DocxTemplate(retainer_template_path)
    credit_card_doc = DocxTemplate(credit_card_auth_path)
    
    

    # Format the date as "Month, Day Year"
    formatted_incident_date = form_data['incident_date'].strftime("%B %d, %Y")
    formatted_todays_date = form_data['date_created'].strftime("%B %d, %Y")
   


    # Define the context dictionary using form data
    context = {
        'fax_number': form_data['fax_number'],
        'todays_date': formatted_todays_date,
        'dwi_status': form_data['dwi_status'],
        'court_house_name': form_data['court_house_name'],
        'court_house_street': form_data['court_house_street'],
        'payment_type': form_data['payment_type'],
        'credit_card_type': form_data['credit_card_type'],
        'court_house_city': form_data['court_house_city'],
        'court_house_state': form_data['court_house_state'],
        'court_house_zip': form_data['court_house_zip'],
        'client_email': form_data['client_email'],
        'client_name': form_data['client_name'].upper(),
        'court_house_county': form_data['court_house_county'].upper(),
        'court_house_name_upper': form_data['court_house_name'].upper(),
        'complaint_number': form_data['complaint_number'].replace(",", " ").upper(),
        'incident_date': formatted_incident_date,
        'case_status': form_data['case_status'].upper(),
        'credit_card_number': form_data['credit_card_number'],
        'credit_card_last4': form_data['credit_card_number'][-4:], 
        'credit_card_expiration': form_data['credit_card_expiration'],
        'credit_card_cvv': form_data['credit_card_cvv'],
        'client_balance': form_data['client_balance'],
    }

    # Render the documents with the provided context
    discovery_doc.render(context)
    representation_doc.render(context)
    retainer_doc.render(context)
    credit_card_doc.render(context)

    # Define the output file paths for DOCX files inside the client's folder
    discovery_output_path_docx = os.path.join(tempClientFolder, f"{client_name}_discovery.docx")
    representation_output_path_docx = os.path.join(tempClientFolder, f"{client_name}_representation.docx")
    retainer_output_path_docx = os.path.join(tempClientFolder, f"{client_name}_retainer.docx")
    credit_card_output_path_docx = os.path.join(tempClientFolder, f"{client_name}_creditcardauth.docx")

    # Save the filled-in DOCX files
    discovery_doc.save(discovery_output_path_docx)
    representation_doc.save(representation_output_path_docx)
    retainer_doc.save(retainer_output_path_docx)
    credit_card_doc.save(credit_card_output_path_docx)

    
    clientDocumentsDict = {
        'discovery': discovery_output_path_docx,
        'representation': representation_output_path_docx,
        'retainer': retainer_output_path_docx,
        'ccauth': credit_card_output_path_docx
    }
    
    with zipfile.ZipFile(os.path.join(temp_dir, document_name), 'w', zipfile.ZIP_DEFLATED) as zipf:
        for doc_name_key, doc_path in clientDocumentsDict.items():
            doc_name = f"{client_name}_{doc_name_key}.docx"
            zipf.write(doc_path, arcname=doc_name)
            
            

# Helper function to get the cursor
def get_db_cursor():
    if 'db_cursor' not in g:
        conn = psycopg2.connect(config('DATABASE_URL'))
        g.db_cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    return g.db_cursor

@client_information_bp.route('/clients', methods=['GET'])
@jwt_required()
def get_all_clients():
    cursor = None
    
    try:
        cursor = get_db_cursor()

        # Modify the SQL query to retrieve client information from multiple tables
        cursor.execute("""
            SELECT
                ci.client_id,
                ci.client_name,
                ci.credit_card_number,
                ci.credit_card_expiration,
                ci.credit_card_cvv,
                ci.client_balance,
                ci.client_email,
                ci.payment_type,
                ci.credit_card_type,
                v.case_status,
                v.dwi_status,
                v.complaint_number,
                v.incident_date,
                co.fax_number,
                co.court_house_name,
                co.court_house_street,
                co.court_house_city,
                co.court_house_state,
                co.court_house_zip,
                co.court_house_county,
                ci.ccauth_docx,
                ci.discovery_docx,
                ci.representation_docx,
                ci.retainer_docx,
                cn.client_notes  -- Include client_notes from the client_notes table
            FROM client_information ci
            LEFT JOIN violations v ON ci.client_id = v.client_id
            LEFT JOIN court_information co ON ci.client_id = co.client_id
            LEFT JOIN client_notes cn ON ci.client_id = cn.client_id
            ORDER BY ci.client_id ASC
        """)

        client_data = cursor.fetchall()

        # Convert bytea data to base64-encoded strings
        for client in client_data:
            for field in ['ccauth_docx', 'discovery_docx', 'representation_docx', 'retainer_docx']:
                if client[field]:
                    client[field] = base64.b64encode(client[field]).decode('utf-8')

        return jsonify(client_data)

    except Exception as e:
        return jsonify({"error": str(e)})

    finally:
        if cursor:
            cursor.close()  # Close the cursor in the finally block
            
    
@client_information_bp.route('/clients/<int:client_id>', methods=['DELETE'])
@jwt_required()
def delete_client(client_id):
    try:
        cursor = conn.cursor()

        # Check if the client exists
        cursor.execute("SELECT * FROM client_information WHERE client_id = %s", (client_id,))
        client_data = cursor.fetchone()

        if client_data is None:
            return jsonify({"error": "Client not found."}), 404

        # Delete associated data from other tables
        cursor.execute("DELETE FROM violations WHERE client_id = %s", (client_id,))
        cursor.execute("DELETE FROM court_information WHERE client_id = %s", (client_id,))

        # Delete the client information from the client_information table
        cursor.execute("DELETE FROM client_information WHERE client_id = %s", (client_id,))

        conn.commit()

        return jsonify({"message": "Client deleted successfully"})

    except psycopg2.Error as e:
        conn.rollback()  # Roll back changes if an error occurs
        return jsonify({"error": str(e)})

    finally:
        if cursor:
            cursor.close()
    
    

@client_information_bp.patch('/clients/<int:client_id>')
@jwt_required()
def update_client_info(client_id):
    try:
        cursor = conn.cursor()
        new_case_status = request.json.get('case_status')
        new_client_name = request.json.get('client_name')
        new_client_email = request.json.get('client_email')

        if new_case_status:
            cursor.execute("UPDATE violations SET case_status = %s WHERE client_id = %s", (new_case_status, client_id))
        if new_client_name:
            cursor.execute("UPDATE client_information SET client_name = %s WHERE client_id = %s", (new_client_name, client_id))
        if new_client_email:
            cursor.execute("UPDATE client_information SET client_email = %s WHERE client_id = %s", (new_client_email, client_id))

        conn.commit()
        return jsonify({"message": "Client information updated successfully"})

    except Exception as e:
        conn.rollback()  # Roll back changes if an error occurs
        return jsonify({"error": str(e)})

    finally:
        if cursor:
            cursor.close()
            
            
@client_information_bp.route('/download-documents/<int:client_id>', methods=['GET'])
@jwt_required()
def download_documents(client_id):
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    try:
        cursor.execute("""
            SELECT  ci.*, v.*, co.*  
            FROM client_information ci
            LEFT JOIN violations v ON ci.client_id = v.client_id
            LEFT JOIN court_information co ON ci.client_id = co.client_id
            WHERE ci.client_id = %s
        """, (client_id,))
        
        client_data = cursor.fetchone()

        if client_data is None:
            return jsonify({"error": "Client not found."}), 404

        # Define the document name for download
        client_name = client_data['client_name']
        document_name = f"{client_name}_documents.zip"  # Creating a ZIP file to contain all documents

        # Create a temporary directory to store the individual documents
        temp_dir = tempfile.mkdtemp()
        print({'temp_dir': temp_dir})

        makeTempClientFiles(client_data, temp_dir, document_name)
        # Send the ZIP file containing all documents as a file attachment
        return send_from_directory(temp_dir, document_name, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)})

    finally:
        if cursor:
            cursor.close()


@client_information_bp.route('/client-notes', methods=['POST'])
@jwt_required()
def add_or_update_client_notes():
    try:
        form_data = request.get_json()
        client_id = form_data.get('client_id')
        client_notes = form_data.get('client_notes')

        if not client_id or not client_notes:
            return jsonify({"error": "Client ID and client notes are required fields."}), 400

        cursor = conn.cursor()

        try:
            cursor.execute('''
                SELECT * FROM client_notes
                WHERE client_id = %s
            ''', (client_id,))

            existing_notes = cursor.fetchone()

            if existing_notes:
                cursor.execute('''
                    UPDATE client_notes
                    SET client_notes = %s
                    WHERE client_id = %s
                ''', (client_notes, client_id))
            else:
                cursor.execute('''
                    INSERT INTO client_notes (client_id, client_notes)
                    VALUES (%s, %s)
                ''', (client_id, client_notes))

            conn.commit()
        finally:
            cursor.close()

        return jsonify({"message": "Client notes added/updated successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}, 500)
