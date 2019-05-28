from pony.orm import db_session
from app import db
from models.Event import Event
from models.User import User, UserSchema
from models.Keyword import Keyword

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():

    schema = UserSchema()
    gabe = User(
        username='gabelton',
        email='gabemcrrock@hotmail.co.uk',
        password='pass',
        password_confirmation='pass',
        events=[],
        keywords=[]
    )
    v = User(
        username='vpaez',
        email='vpaez@hotmail.co.uk',
        password='pass',
        password_confirmation='pass',
        events=[],
        keywords=[]
    )

    post_impressionism = Keyword(name='Post-Impressionism', events=[], users=gabe)
    dutch = Keyword(name='Dutch', events=[], users=gabe)
    painting = Keyword(name='Painting', events=[], users=gabe)
    photography = Keyword(name='Photography', events=[], users=v)
    ny = Keyword(name='New York', events=[], users=v)


    Event(name='Van Gogh in Britain', start_date='27-03-19', end_date='11-08-19', venue='Tate Britain', area='Central', keywords=[post_impressionism, dutch, painting], entry_fee=22, user=gabe)

    Event(name='diane arbus: in the beginning', start_date='13-02-19', end_date='06-05-19', venue='Hayward Gallery', area='Central', keywords=[photography, ny], entry_fee=15.5, user=v)
    #Event(name='Manga', start_date='23-05-19', end_date='26-08-19', venue='British Museum', area='Central', keywords=['comics', 'manga', 'Japan', 'illustration'], entry_fee=20, artists=['Osamu Tezuka', 'Oda Eiichiro', 'Noda Satoru'])

    db.commit()
