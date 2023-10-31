from flask import Blueprint, request, jsonify

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/authentication', methods=['GET'])
def authenticationTest():
    return "Authentication Backend!"

@auth_bp.route('/login', methods=['POST'])
def login():
    email = request.form['username']
    password = request.form['password']
    if email == 'test@gmail.com' and password == 'password':
        
        return jsonify({'status':'success','message': 'Login successful navigating to /dashboard'})
    else:
        return jsonify({'status': 'fail','message': 'Invalid username or password'})