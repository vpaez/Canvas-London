from datetime import datetime, timedelta
import bcrypt
import jwt
from pony.orm import Required, Set
from marshmallow import Schema, fields, post_load, validates_schema, ValidationError
from app import db

class User(db.Entity):
    username = Required(str, unique=True)
    email = Required(str, unique=True)
    password_hash = Required(str)
    events = Set('Event')
    keywords

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    email = fields.Str(required=True)
    password = fields.Str(load_only=True)
    password_confirmation = fields.Str(load_only=True)
    events = fields.Nested('EventSchema', )
