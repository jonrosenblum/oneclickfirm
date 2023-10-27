from flask import Blueprint

document_templates_bp = Blueprint('document_templates', __name__)

@document_templates_bp.route('/documents', methods=['GET'])
def test():
    return "Documents Backend!"
