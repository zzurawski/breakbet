from flask_sqlalchemy import SQLalchemy
from flask import Flask

app = Flask(__name__)

db = SQLalchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), unique=True, nullable=False)
    password = db.Column(db.String(64), nullable=False)
