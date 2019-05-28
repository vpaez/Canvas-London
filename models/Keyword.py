from app import db
from pony.orm import Required, Optional, Set
from marshmallow import Schema, fields, post_load

class Keyword(db.Entity):
    name = Required(str)
    events = Set('Event')
    users = Set('User')

class KeywordSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    events = fields.Nested('EventSchema', many=True, exclude=('keywords', 'user'), dump_only=True)
    keyword_ids = fields.List(fields.Int(), load_only=True)
    users = fields.Nested('UserSchema', many=True, exclude=('keywords', 'events'), dump_only=True)

    @post_load
    def load_keywords(self, data):
        data['events'] = [Keyword.get(id=keyword_id) for keyword_id in data['event_ids']]
        del data['event_ids']

        return data
