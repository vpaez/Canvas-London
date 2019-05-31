from flask import Blueprint
from pony.orm import db_session
from app import db

from models.Artist import Artist, ArtistSchema


router = Blueprint(__name__, 'artists')


@router.route('/artists', methods=['GET'])
@db_session
def index():
    schema = ArtistSchema(many=True)
    artists = Artist.select()

    return schema.dumps(artists)
