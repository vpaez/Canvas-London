from flask import Blueprint, request, jsonify, g
from models.User import User, UserSchema
from models.Keyword import Keyword
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







@router.route('/me', methods=['PUT'])
@db_session
@secure_route
def edit_profile():

    schema = UserSchema()
    data = request.get_json()
    if data.get('concession'):
        data['concession'] = data['concession'] == 'true'
    if data.get('keyword_ids'):
        print(g.current_user.keywords)
        previousKeywords = []
        for keyword in g.current_user.keywords:
            previousKeywords.append(keyword)
        data['keywords'] = [Keyword.get(id=keyword_id) for keyword_id in data['keyword_ids']] + previousKeywords
        del data['keyword_ids']
    g.current_user.set(**data)
    db.commit()
    user_info = g.current_user
    return schema.dumps(user_info)
