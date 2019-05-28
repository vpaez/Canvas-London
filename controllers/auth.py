from flask import Blueprint, request, jsonify
from models.User import User, UserSchema
from app import db
from pony.orm import db_session
from marshmallow import ValidationError


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
