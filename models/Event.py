from app import db
from pony.orm import Required, Optional, Set
from marshmallow import Schema, fields, post_load
from .Keyword import Keyword

class Event(db.Entity):
    name = Required(str)
    start_date = Required(str)
    end_date = Required(str)
    venue = Required(str)
    area = Required(str)
    entry_fee = Required(int)
    image = Optional(str)
    artists = Optional(str)
    user = Required('User')
    keywords = Set('Keyword')



class EventSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    start_date = fields.Str(required=True)
    end_date = fields.Str(required=True)
    venue = fields.Str(required=True)
    area = fields.Str(required=True)
    entry_fee = fields.Int(required=True)
    image = fields.Str()
    artists = fields.Str(many=True)
    user = fields.Nested('UserSchema', exclude=('events',), dump_only=True)
    user_id = fields.Int(load_only=True)
    keywords = fields.Nested('KeywordSchema', many=True, exclude=('events',), dump_only=True)
    keyword_ids = fields.List(fields.Int(), load_only=True)

    @post_load
    def load_keywords(self, data):
        # data['categories'] = map(lambda category_id: Category.get(id=category_id), data['category_ids'])
        data['keywords'] = [Keyword.get(id=keyword_id) for keyword_id in data['keyword_ids']]
        del data['keyword_ids']

        return data
