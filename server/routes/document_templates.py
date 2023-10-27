from flask import Blueprint

document_template_bp = Blueprint('document_template', __name__)

@document_template_bp.route('/documents', methods=['GET'])
def authenticationTest():
    return "Documents Backend!"
