from flask import Blueprint, abort
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


@router.route('/artists/<int:artist_id>', methods=['GET'])
@db_session
def show(artist_id):
    schema = ArtistSchema()
    artist = Artist.get(id=artist_id)
    if not artist:
        abort(404)
    return schema.dumps(artist)
