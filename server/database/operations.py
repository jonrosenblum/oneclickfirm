import os
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from models.template import TemplateFile  # Import the TemplateFile model
from models import Base

# Database initialization
def init_db():
    engine = create_engine('postgresql://jonrosenblum:password@localhost/dbname')
    Base.metadata.create_all(engine)
    print("Database tables created.")

# Create a database session
def get_db_session():
    engine = create_engine('postgresql://username:password@localhost/dbname')
    Session = sessionmaker(bind=engine)
    return Session()

# # Function to create a new template file record
# def create_template_file(session, file_name, file_type, file_content):
#     new_template_file = TemplateFile(
#         file_name=file_name,
#         file_type=file_type,
#         file_content=file_content
#     )
#     session.add(new_template_file)
#     session.commit()

# # Function to add template files from a directory to the database
# def add_templates_from_directory(session, directory_path):
#     for root, _, files in os.walk(directory_path):
#         for filename in files:
#             full_path = os.path.join(root, filename)

#             # Read file content
#             with open(full_path, 'rb') as file:
#                 file_content = file.read()

#             # Create a template file record in the database
#             create_template_file(session, filename, os.path.splitext(filename)[1], file_content)

if __name__ == "__main__":
    init_db()  # Create database tables
