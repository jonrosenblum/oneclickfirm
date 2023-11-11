from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt_identity,
    JWTManager,
)
from werkzeug.security import generate_password_hash, check_password_hash
import psycopg2
from decouple import config 

auth_bp = Blueprint('auth', __name__)

# Establish a connection to the database
try:
    conn = psycopg2.connect(config('DATABASE_URL'))  # Replace with your actual database URI
    cursor = conn.cursor()

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

except Exception as e:
    print("Error connecting to the database:", str(e))
    conn = None
    cursor = None


@auth_bp.route("/users", methods=["POST"])
def signup():
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
    cursor.execute("SELECT * FROM users WHERE email = %s OR username = %s", (email, username))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({"msg": "Email or Username already exists"}), 400

    # Hash the password before storing it in the database
    hashed_password = generate_password_hash(password)
    cursor.execute("INSERT INTO users (first_name, last_name, username, email, password) VALUES (%s, %s, %s, %s, %s)", (first_name, last_name, username, email, hashed_password))
    conn.commit()

    # Generate access and refresh tokens
    access_token = create_access_token(identity=email)
    refresh_token = create_refresh_token(identity=email)

    return jsonify(access_token=access_token, refresh_token=refresh_token), 201



@auth_bp.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user_data = cursor.fetchone()
    print("User data:", user_data)
    

    if user_data and check_password_hash(user_data[2], password):
        access_token = create_access_token(identity=email)
        refresh_token = create_refresh_token(identity=email)
        return jsonify(access_token=access_token, refresh_token=refresh_token), 200
    else:
        return jsonify({"msg": "Bad username or password"}), 401

@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    new_access_token = create_access_token(identity=current_user)
    return jsonify(access_token=new_access_token), 200























# from flask import Blueprint, request, jsonify

# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required

# auth_bp = Blueprint('auth', __name__)

# @auth_bp.route('/authentication', methods=['GET'])
# def authenticationTest():
#     return "Authentication Backend!"

# @auth_bp.route('/login', methods=['POST'])
# def login():
#     email = request.form['username']
#     password = request.form['password']
#     if email == 'test@gmail.com' and password == 'password':
        
#         return jsonify({'status':'success','message': 'Login successful navigating to /dashboard'})
#     else:
#         return jsonify({'status': 'fail','message': 'Invalid username or password'})
    
    # Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.


# @auth_bp.route("/login", methods=["POST"])
# def login():
#     username = request.json.get("username", None)
#     password = request.json.get("password", None)
# #     if username != "test" or password != "test":
# #         return jsonify({"msg": "Bad username or password"}), 401
        
# #     access_token = create_access_token(identity=username)
# #     return jsonify(access_token=access_token)


# # Protect a route with jwt_required, which will kick out requests
# # without a valid JWT present.
# @auth_bp.route("/protected", methods=["GET"])
# @jwt_required()
# def protected():
#     # Access the identity of the current user with get_jwt_identity
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user), 200
