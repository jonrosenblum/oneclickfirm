import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, LargeBinary
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('postgresql://your_username:your_password@localhost/your_database_name')

Base = declarative_base()

class DocumentTemplate(Base):
    __tablename__ = 'templates'

    template_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    pdf_data = Column(LargeBinary, nullable=False)