from datetime import datetime, timedelta
import bcrypt
import jwt
from pony.orm import Required, Set
from marshmallow import Schema, fields, post_load, validates_schema, ValidationError
from app import db
from config.environment import secret

class User(db.Entity):
    username = Required(str, unique=True)
    email = Required(str, unique=True)
    password_hash = Required(str)
    events = Set('Event')
    keywords = Set('Keyword')

    def is_password_valid(self, plaintext):
        return bcrypt.checkpw(plaintext.encode('utf8'), self.password_hash.encode('utf8'))

    def generate_token(self):
        payload = {
            'exp': datetime.utcnow() + timedelta(hours=6),
            'iat': datetime.utcnow(),
            'sub': self.id
        }

        token = jwt.encode(
            payload,
            secret,
            'HS256'
        ).decode('utf8')

        return token

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    email = fields.Str(required=True)
    password = fields.Str(load_only=True)
    password_confirmation = fields.Str(load_only=True)
    events = fields.Nested('EventSchema', exclude=('user',))
    keywords = fields.Nested('KeywordSchema', exclude=('users',))
