from flask import Blueprint, request, jsonify

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/authentication', methods=['GET'])
def authenticationTest():
    return "Authentication Backend!"

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


@auth_bp.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401
        
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@auth_bp.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
