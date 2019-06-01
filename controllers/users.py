from flask import Blueprint, request, jsonify, g
from models.User import User, UserSchema
from models.Keyword import Keyword
from app import db
from pony.orm import db_session
from marshmallow import ValidationError
from lib.secure_route import secure_route


router = Blueprint(__name__, 'users')

@router.route('/users', methods=['GET'])
@db_session
@secure_route
def index():


    def match_users(keyword):
        print(keyword.id)
        if keyword.id in current_user_keywords:
            print('PASS', keyword.name)
            return True
        return False

    schema = UserSchema(many=True)
    users = User.select()
    matched_users = []
    current_user_keywords = []
    for keyword in g.current_user.keywords:
        current_user_keywords.append(keyword.id)

    for user in users:
        if not user.id == g.current_user.id:
            user_match = list(filter(match_users, user.keywords))
        if user_match:
            user = {'username': user.username, 'contact': 'email'}
            matched_users.append(user)
        print(not user_match, 'MATCH?')
    print(g.current_user.keywords, 'main user')
    return jsonify({'data': matched_users})
