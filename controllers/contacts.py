from flask import Blueprint, jsonify, g
from models.User import User, UserSchema
from pony.orm import db_session, select
from lib.secure_route import secure_route



router = Blueprint(__name__, 'contacts')

@router.route('/contacts', methods=['GET'])
@db_session
@secure_route
def get_contacts():

    def intersection(listA, listB):
        return list(set(listA) & set(listB))

    users = User.select()
    users = [u for u in users if intersection(u.keywords, g.current_user.keywords) and u != g.current_user]
    print(users)


    def get_keywords(keywords):
        keywords = [{'id': keyword.id, 'name': keyword.name} for keyword in keywords if keyword in g.current_user.keywords]
        return keywords

    users = list(map(lambda user: {'username': user.username, 'matches': get_keywords(user.keywords)}, users))

    return jsonify({'users': users})
