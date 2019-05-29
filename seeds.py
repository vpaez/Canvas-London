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
        password_hash=schema.generate_hash('pass'),
        events=[],
        keywords=[]
    )
    v = User(
        username='violeta',
        email='violepaez@gmail.com',
        password_hash=schema.generate_hash('pass'),
        events=[],
        keywords=[]
    )

    post_impressionism = Keyword(name='Post-Impressionism', events=[], users=gabe)
    dutch = Keyword(name='Dutch', events=[], users=gabe)
    painting = Keyword(name='Painting', events=[], users=gabe)
    photography = Keyword(name='Photography', events=[], users=v)
    ny = Keyword(name='New York', events=[], users=v)
    performance_art = Keyword(name='Performance art', events=[], users=v)
    textiles = Keyword(name='Textiles', events=[], users=v)


    Event(name='Van Gogh in Britain', start_date='27-03-19', end_date='11-08-19', venue='Tate Britain', area='Central', keywords=[post_impressionism, dutch, painting], entry_fee=22, user=gabe, image="https://www.tate.org.uk/sites/default/files/styles/width-600/public/van_gogh_self_portrait.jpg")

    Event(name='Block Universe 2019', start_date='25-05-19', end_date='2-06-19', venue='Somerset House', area='Central', keywords=[performance_art], entry_fee=22, user=gabe, image="https://img.artrabbit.com/events/block-universe-2019/images/j81L5lSARmXl/1500x937/web-background-01.webp")

    Event(name='diane arbus: in the beginning', start_date='13-02-19', end_date='06-05-19', venue='Hayward Gallery', area='Central', keywords=[photography, ny], entry_fee=15.5, user=v, image="https://www.bjp-online.com/wp-content/uploads/2018/10/DP356754-P1-jack-dracula.jpg")

    Event(name='Susan Hefuna: TEXTILES', start_date='24-05-2019', end_date='22-06-2019', venue='Pi Artworks', area='North London', keywords=[textiles], entry_fee=15.5, user=v, image="https://img.artrabbit.com/events/susan-hefuna-textiles-pi-artworks/images/HlTR29VrdtxI/815x699/Stand-Up-2019-Felt-Gaze-Thread-55-x-64-cm.webp")
    #Event(name='Manga', start_date='23-05-19', end_date='26-08-19', venue='British Museum', area='Central', keywords=['comics', 'manga', 'Japan', 'illustration'], entry_fee=20, artists=['Osamu Tezuka', 'Oda Eiichiro', 'Noda Satoru'])

    db.commit()
