from flask import Blueprint, request, jsonify
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from lib.secure_route import secure_route

from models.Event import Event, EventSchema



router = Blueprint(__name__, 'events')

@router.route('/events', methods=['GET'])
@db_session
def index():
    schema = EventSchema(many=True)
    events = Event.select()
    return schema.dumps(events)

@router.route('/events', methods=['POST'])
@db_session
def create():
    schema = EventSchema()

    try:
        data = schema.load(request.get_json())
        event = Event(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(event), 201
