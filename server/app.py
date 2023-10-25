from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os
import psycopg2



app = Flask(__name__)
CORS(app)



# Set your PostgreSQL database configuration here
# DB_HOST = '127.0.0.1'
# DB_PORT = '5432'
# DB_NAME = 'lawfirm'
# DB_USER = 'jonrosenblum'
# DB_PASSWORD = 'Jnrsnblm1!'

# def connect_to_db():
#     return psycopg2.connect(
#         host=DB_HOST,
#         port=DB_PORT,
#         dbname=DB_NAME,
#         user=DB_USER,
#         password=DB_PASSWORD
#     )
    
@app.get('/')
def home():
    return "Hello"

@app.route('/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files['file']

    if uploaded_file:
        print("file uploaded")
        # Secure the filename to prevent malicious attacks
        filename = secure_filename(uploaded_file.filename)

        # Save the file temporarily (you can specify your own directory)
        file_path = os.path.join('uploads', filename)
        uploaded_file.save(file_path)

        # # Insert the file into the PostgreSQL database
        # conn = connect_to_db()
        # cur = conn.cursor()
        # with open(file_path, 'rb') as f:
        #     cur.execute("INSERT INTO excel_data (data) VALUES (%s)", (psycopg2.Binary(f.read()),))
        # conn.commit()
        # cur.close()
        # conn.close()

        # Optional: Perform additional data manipulation here

        return jsonify({'message': 'File uploaded and stored in the database.'})
    return jsonify({'error': 'File not found'})

if __name__ == '__main__':
    app.run(debug=True)
