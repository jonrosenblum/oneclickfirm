from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt_identity,
    JWTManager
)
from werkzeug.security import generate_password_hash, check_password_hash
import psycopg2
import psycopg2.extras

from decouple import config 
from flask_bcrypt import Bcrypt

auth_bp = Blueprint('auth', __name__)


try:
    conn = psycopg2.connect(config('DATABASE_URL'))  # Replace with your actual database URI
    cursor = conn.cursor()
    keyed_cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    # Create the users table if it does not exist
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(80) NOT NULL,
            last_name VARCHAR(80) NOT NULL,
            username VARCHAR(80) UNIQUE NOT NULL,
            email VARCHAR(120) UNIQUE NOT NULL,
            password VARCHAR(256) NOT NULL
        )
    ''')
    conn.commit()

except psycopg2.Error as e:
    print("Error connecting to the database:", str(e))
    conn = None
    cursor = None
    keyed_cursor = None

finally:
    # Close cursors and connection in all scenarios
    if cursor:
        cursor.close()
    if keyed_cursor:
        keyed_cursor.close()
    if conn:
        conn.close()
        

def getBcrypter():
    return Bcrypt(current_app)

@auth_bp.route("/signup", methods=["POST"])
def signup():
    try:
        # Get user information from the request
        first_name = request.json.get("first_name", None)
        last_name = request.json.get("last_name", None)
        username = request.json.get("username", None)
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        # Check if required fields are provided
        if not first_name or not last_name or not username or not email or not password:
            return jsonify({"msg": "All fields (First Name, Last Name, Username, Email, Password) are required"}), 400

        # Check for uniqueness of both email and username
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM users WHERE email = %s OR username = %s", (email, username))
            existing_user = cursor.fetchone()

            if existing_user:
                return jsonify({"msg": "Email or Username already exists"}), 400

            # Hash the password before storing it in the database
            hashed_password = getBcrypter().generate_password_hash(password).decode('utf-8')

            cursor.execute("INSERT INTO users (first_name, last_name, username, email, password) VALUES (%s, %s, %s, %s, %s)", (first_name, last_name, username, email, hashed_password))
            conn.commit()

        # Generate access and refresh tokens
        access_token = create_access_token(identity=email)
        refresh_token = create_refresh_token(identity=email)

        return jsonify(access_token=access_token, refresh_token=refresh_token), 201

    except psycopg2.OperationalError as e:
        current_app.logger.error("Database connection error: %s", str(e))
        return jsonify({"error": "A database error occurred. Please try again later."}), 500

    except Exception as e:
        current_app.logger.error("An unexpected error occurred: %s", str(e))
        return jsonify({"error": "An unexpected error occurred. Please try again later."}), 500


@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        # Assuming you have a connection pool setup
        with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as keyed_cursor:
            keyed_cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
            user_data = keyed_cursor.fetchone()

        if user_data is None:
            return jsonify({"msg": "email not found"}), 404

        stored_password_hash = user_data['password']
        password_valid = getBcrypter().check_password_hash(stored_password_hash, password)

        if password_valid:
            access_token = create_access_token(identity=email)
            refresh_token = create_refresh_token(identity=email)
            return jsonify(access_token=access_token, refresh_token=refresh_token), 200
        else:
            return jsonify({"msg": "Bad password"}), 401

    except psycopg2.OperationalError as e:
        current_app.logger.error("Database connection error: %s", str(e))
        return jsonify({"error": "A database error occurred. Please try again later."}), 500

    except Exception as e:
        current_app.logger.error("An unexpected error occurred: %s", str(e))
        return jsonify({"error": "An unexpected error occurred. Please try again later."}), 500


@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    new_access_token = create_access_token(identity=current_user)
    return jsonify(access_token=new_access_token), 200















