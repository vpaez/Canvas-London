from flask import Blueprint, request, jsonify, g
from models.User import User, UserSchema
from app import db
from pony.orm import db_session
from marshmallow import ValidationError
from lib.secure_route import secure_route



router = Blueprint('auth', __name__)

@router.route('/register', methods=['POST'])
@db_session
def register():

    schema = UserSchema()

    try:
        data = schema.load(request.get_json())
        user = User(**data)
        db.commit()
    except ValidationError as error:
        return jsonify({'error': error.messages}), 422

    return jsonify({
        'message': 'Registration successful',
        'token': user.generate_token()
    })

@router.route('/login', methods=['POST'])
@db_session
def login():

    data = request.get_json()

    user = User.get(email=data.get('email'))

    if not user or not user.is_password_valid(data.get('password')):
        return jsonify({'message': 'Unauthorized'}), 401

    return jsonify({
        'message': f'Welcome back {user.username}',
        'token': user.generate_token()
    })


@router.route('/me', methods=['GET'])
@db_session
@secure_route
def profile():
    schema = UserSchema()
    return schema.dumps(g.current_user)

@router.route('/me', methods=['POST'])
@db_session
@secure_route
def edit_profile():
    schema = UserSchema()
    user = User.get(id=g.current_user.id)
    data = schema.load(request.get_json())
    user.set(**data)
    db.commit()
    return schema.dumps(user)


    #
    #
    # schema = EventSchema()
    # event = Event.get(id=event_id)
    # if not event:
    #     return jsonify({'message': 'Event not found'}), 404
    # if not event.user.id == g.current_user.id:
    #     return jsonify({'message': 'User not authorized'}), 404
    # try:
    #     data = schema.load(request.get_json())
    #     event.set(**data)
    #     db.commit()
    # except ValidationError as err:
    #     return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422
    #
    # return schema.dumps(event)
