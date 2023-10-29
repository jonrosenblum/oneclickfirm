from flask import Blueprint, send_from_directory, current_app, make_response

document_templates_bp = Blueprint('document_templates', __name__)

@document_templates_bp.route('/documents', methods=['GET'])
def documents():
    return "Documents Backend!"


@document_templates_bp.route('/templates/<path:template_name>')
def serve_template(template_name):
    return send_from_directory(current_app.static_folder, template_name)