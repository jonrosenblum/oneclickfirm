from sqlalchemy import Column, Integer, String, Binary
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class TemplateFile(Base):
    __tablename__ = 'template_files'

    id = Column(Integer, primary_key=True)
    file_name = Column(String)
    file_type = Column(String)
    file_content = Column(Binary)