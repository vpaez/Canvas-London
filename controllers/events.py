from flask import Blueprint, request, jsonify, g, abort
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
@secure_route
def create():
    schema = EventSchema()

    try:
        data = schema.load(request.get_json())
        data['user'] = g.current_user
        event = Event(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(event), 201

@router.route('/events/<int:event_id>', methods=['GET'])
@db_session
def show(event_id):
    schema = EventSchema()
    event = Event.get(id=event_id)

    if not event:
        abort(404)
    return schema.dumps(event)

@router.route('/events/<int:event_id>', methods=['PUT'])
@db_session
@secure_route

def update(event_id):
    schema = EventSchema()
    event = Event.get(id=event_id)
    if not event:
        return jsonify({'message': 'Event not found'}), 404
    if not event.user.id == g.current_user.id:
        return jsonify({'message': 'User not authorized'}), 404
    try:
        data = schema.load(request.get_json())
        event.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(event)
