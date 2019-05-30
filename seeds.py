from pony.orm import db_session
from app import db
from models.Event import Event
from models.User import User, UserSchema
from models.Keyword import Keyword
import datetime
from datetime import date

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
    comics = Keyword(name='Comics', events=[], users=gabe)
    manga = Keyword(name='Manga', events=[], users=gabe)
    japan = Keyword(name='Japan', events=[], users=gabe)
    illustration = Keyword(name='Illustration', events=[], users=gabe)
    manuscripts = Keyword(name='Manuscripts', events=[], users=gabe)
    india = Keyword(name='India', events=[], users=v)
    doc = Keyword(name='Documentary', events=[], users=gabe)
    war = Keyword(name='War', events=[], users=v)
    extra = Keyword(name='War', events=[], users=gabe)



    Event(name='Van Gogh in Britain', start_date=datetime.date(2019, 3, 27).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 11, 8).strftime("%d/%m/%Y"), venue='Tate Britain', area='Central', keywords=[post_impressionism, dutch, painting], entry_fee=22, user=gabe, image="https://www.tate.org.uk/sites/default/files/styles/width-600/public/van_gogh_self_portrait.jpg")

    Event(name='Block Universe 2019', start_date=datetime.date(2019, 5, 25).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 2).strftime("%d/%m/%Y"), venue='Somerset House', area='Central', keywords=[performance_art], entry_fee=22, user=gabe, image="https://img.artrabbit.com/events/block-universe-2019/images/j81L5lSARmXl/1500x937/web-background-01.webp")

    Event(name='diane arbus: in the beginning', start_date=datetime.date(2019, 2, 13).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 6).strftime("%d/%m/%Y"), venue='Hayward Gallery', area='Central', keywords=[photography, ny], entry_fee=15.5, user=v, image="https://www.bjp-online.com/wp-content/uploads/2018/10/DP356754-P1-jack-dracula.jpg")

    Event(name='Susan Hefuna: TEXTILES', start_date=datetime.date(2019, 5, 24).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 22).strftime("%d/%m/%Y"), venue='Pi Artworks', area='North London', keywords=[textiles], entry_fee=15.5, user=v, image="https://img.artrabbit.com/events/susan-hefuna-textiles-pi-artworks/images/HlTR29VrdtxI/815x699/Stand-Up-2019-Felt-Gaze-Thread-55-x-64-cm.webp")

    Event(name='Manga', start_date=datetime.date(2019, 5, 23).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 8, 26).strftime("%d/%m/%Y"), venue='British Museum', area='Central', keywords=[comics, manga, japan, illustration], entry_fee=20, user=gabe, image='https://www.artfund.org/thumbnail/908/assets/what-to-see/exhibitions/2019/05/manga/golden-kamuy.jpg')

    Event(name='Buddhism', start_date=datetime.date(2019, 10, 25).strftime("%d/%m/%Y"), end_date=datetime.date(2020, 2, 23).strftime("%d/%m/%Y"), venue='British Library', area='Central', keywords=[japan, illustration, manuscripts, india], entry_fee=14, user=gabe, image='https://www.bl.uk/britishlibrary/~/media/bl/global/whats%20on/exhibitions/buddhism/buddhism_624x351.jpg?crop=1&cropX=0&cropY=0&cropW=624&cropH=351&w=624&h=351&dispW=624&dispH=351')

    Event(name='Don McCullin', start_date=datetime.date(2019, 2, 5).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 6).strftime("%d/%m/%Y"), venue='British Library', area='Central', keywords=[photography, doc, war], entry_fee=20, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-720/public/id_145.jpg')

    Event(name='SHOULD NOT APPEAR', start_date=datetime.date(2019, 2, 5).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 6).strftime("%d/%m/%Y"), venue='British Library', area='Central', keywords=[extra], entry_fee=20, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-720/public/id_145.jpg')

    #artists=['Osamu Tezuka', 'Oda Eiichiro', 'Noda Satoru']

    db.commit()
