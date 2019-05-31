from app import db
from pony.orm import Required
from marshmallow import Schema, fields


class Artist(db.Entity):
    name = Required(str)


class ArtistSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
