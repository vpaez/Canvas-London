from flask import Blueprint, request, jsonify
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
        'message': 'Registration successful'
    })

@router.route('/login', methods=['POST'])
@db_session

def login():

    data = request.get_json()

    user = User.get(email=data.get('email'))

    if not user:
        return jsonify({'message': 'Unauthorized'}), 401

    return jsonify({
        'message': f'Welcome back {user.username}'
    })
