from flask import Blueprint, jsonify, g
from models.User import User
from pony.orm import db_session
from lib.secure_route import secure_route



router = Blueprint(__name__, 'contacts')

@router.route('/contacts', methods=['GET'])
@db_session
@secure_route
def get_contacts():
    print('AHAKSDKADHSASK')
    matched_contacts = []
    shared_interests = []
    current_user_keywords = []
    def match_contacts(keyword):
        return keyword.id in current_user_keywords

    contacts = User.select()

    for keyword in g.current_user.keywords:
        current_user_keywords.append(keyword.id)

    for user in contacts:
        if not user.id == g.current_user.id:
            user_match = list(filter(match_contacts, user.keywords))
        if user_match:
            for keyword in user_match:
                if not keyword.name in shared_interests:
                    shared_interests.append(keyword.name)
            contact = {'username': user.username, 'id': user.id, 'email': 'email', 'interests': shared_interests}
            matched_contacts.append(contact)
        shared_interests = []
    return jsonify({'contacts': matched_contacts})
