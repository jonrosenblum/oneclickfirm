from flask import Blueprint

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/authentication', methods=['GET'])
def authenticationTest():
    return "Authentication Backend!"