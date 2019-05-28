from flask import Blueprint
from pony.orm import db_session

from models.Event import Event, EventSchema


router = Blueprint(__name__, 'events')

@router.route('/events', methods=['GET'])
@db_session # Allows access to the database in the `index` function
def index():
    # This will serialize our data
    # `many=True` because there are many sandwiches, ie we expect a list
    schema = EventSchema(many=True)
    events = Event.select() # get all the sandwiches
    return schema.dumps(events)
