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
        return keyword.id in current_user_keywords

    users = User.select()
    matched_users = []
    shared_interests = []
    current_user_keywords = []
    for keyword in g.current_user.keywords:
        current_user_keywords.append(keyword.id)

    for user in users:
        if not user.id == g.current_user.id:
            user_match = list(filter(match_users, user.keywords))
        if user_match:
            print(user_match[0].name, 'AJDAS')
            for keyword in user_match:
                if not keyword.name in shared_interests:
                    shared_interests.append(keyword.name)
            print(shared_interests)
            user = {'username': user.username, 'contact': 'email', 'shared interests': shared_interests}
            matched_users.append(user)
        shared_interests = []
        print(not user_match, 'MATCH?')
    print(g.current_user.keywords, 'main user')
    return jsonify({'data': matched_users})
