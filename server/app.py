from flask import Flask
from flask_cors import CORS 
from routes import auth_bp, client_scraper_bp, document_templates_bp

app = Flask(__name__, static_folder="templates", static_url_path="/templates")

# Register your blueprints
app.register_blueprint(client_scraper_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(document_templates_bp)

# Configure CORS for your app
CORS(app, resources={r"/generate-documents": {"origins": "http://localhost:5173"}})

if __name__ == "__main":
    app.run(debug=True, port=5001)
