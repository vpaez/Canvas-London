from flask import Blueprint
from pony.orm import db_session

from models.Keyword import Keyword, KeywordSchema 

router = Blueprint(__name__, 'keywords') # creates a router for this controller

@router.route('/keywords', methods=['GET'])
@db_session # Allows access to the database in the `index` function
def index():
    # This will serialize our data
    # `many=True` because there are many categories, ie we expect a list
    schema = KeywordSchema(many=True)
    keywords = Keyword.select() # get all the categories
    return schema.dumps(keywords)
