from flask import Flask
from pony.orm import Database
app = Flask(__name__)
db = Database()
db.bind('postgres', 'postgres://localhost:5432/art-london')
from models.Event import Event
from models.User import User
from models.Keyword import Keyword

from config import routes



db.generate_mapping(create_tables=True)
