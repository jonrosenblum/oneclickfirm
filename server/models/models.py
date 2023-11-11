# # models.py
# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime

# db = SQLAlchemy()

# class ClientInformation(db.Model):
#     __tablename__ = 'client_information'

#     client_id = db.Column(db.Integer, primary_key=True)
#     client_name = db.Column(db.String(255), nullable=False)
#     client_email = db.Column(db.String(255), nullable=False)
#     date_created = db.Column(db.Date, default=datetime.utcnow)
#     payment_type = db.Column(db.String(255))
#     credit_card_type = db.Column(db.String(255))
#     credit_card_number = db.Column(db.String(20))
#     credit_card_expiration = db.Column(db.String(10))
#     credit_card_cvv = db.Column(db.String(4))
#     client_balance = db.Column(db.Numeric(10, 2))
#     ccauth_docx = db.Column(db.LargeBinary)
#     discovery_docx = db.Column(db.LargeBinary)
#     representation_docx = db.Column(db.LargeBinary)
#     retainer_docx = db.Column(db.LargeBinary)

# class Violations(db.Model):
#     __tablename__ = 'violations'

#     violation_id = db.Column(db.Integer, primary_key=True)
#     client_id = db.Column(db.Integer, db.ForeignKey('client_information.client_id'))
#     case_status = db.Column(db.String(20))
#     complaint_number = db.Column(db.String(255))
#     incident_date = db.Column(db.Date)

# class CourtInformation(db.Model):
#     __tablename__ = 'court_information'

#     court_id = db.Column(db.Integer, primary_key=True)
#     client_id = db.Column(db.Integer, db.ForeignKey('client_information.client_id'))
#     fax_number = db.Column(db.String(20))
#     court_house_name = db.Column(db.String(255))
#     court_house_street = db.Column(db.String(255))
#     court_house_city = db.Column(db.String(255))
#     court_house_state = db.Column(db.String(255))
#     court_house_zip = db.Column(db.String(10))
#     court_house_county = db.Column(db.String(255))

# class ClientNotes(db.Model):
#     __tablename__ = 'client_notes'

#     notes_id = db.Column(db.Integer, primary_key=True)
#     client_id = db.Column(db.Integer, db.ForeignKey('client_information.client_id'))
#     client_notes = db.Column(db.Text)

# # user model example
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     password = db.Column(db.String(60), nullable=False)
