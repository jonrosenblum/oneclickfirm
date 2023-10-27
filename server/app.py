from flask import Flask
from routes import auth_bp, client_scraper_bp

app = Flask(__name__)

app.register_blueprint(client_scraper_bp)
app.register_blueprint(auth_bp)

if __name__ == "__main__":
    app.run(debug=True)