from app import db
from pony.orm import Required, Optional, Set
from marshmallow import Schema, fields


class Artist(db.Entity):
    name = Required(str)
    description = Optional(str)
    dob = Optional(str)
    dod = Optional(str)
    events = Set('Event')


class ArtistSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str()
    dob = fields.Str()
    dob = fields.Str()
    dod = fields.Str()
    events = fields.Nested('UserSchema', many=True, exclude=('keywords', 'artists', 'user'))
