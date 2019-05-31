from pony.orm import db_session
from app import db
from models.Event import Event
from models.User import User, UserSchema
from models.Keyword import Keyword
from models.Artist import Artist
import datetime
from datetime import date

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():

    schema = UserSchema()
    gabe = User(
        username='gabelton',
        email='gabemcrrock@hotmail.co.uk',
        password_hash=schema.generate_hash('pass')
    )
    v = User(
        username='violeta',
        email='violepaez@gmail.com',
        password_hash=schema.generate_hash('pass')
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
    sculpture = Keyword(name='Sculpture', events=[], users=v)
    emerging_artists = Keyword(name='Emerging artists', events=[], users=v)
    sound = Keyword(name='Sound', events=[], users=v)
    installation = Keyword(name='Installation', events=[], users=v)
    video = Keyword(name='Video', events=[], users=v)
    site_specific = Keyword(name='Site specific', events=[], users=v)
    abstract = Keyword(name='Abstract', events=[], users=v)
    drawing = Keyword(name='Drawing', events=[], users=v)

    van_gogh = Artist(name='Vincent Van Gogh')
    arbus = Artist(name='Diane Arbus')
    hefuna = Artist(name='Susan Hefuna')


    Event(name='Van Gogh in Britain', start_date=datetime.date(2019, 3, 27).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 11, 8).strftime("%d/%m/%Y"), venue='Tate Britain', area='Central', keywords=[post_impressionism, dutch, painting], entry_fee=22, user=gabe, image="https://www.tate.org.uk/sites/default/files/styles/width-600/public/van_gogh_self_portrait.jpg")

    Event(name='Block Universe 2019', start_date=datetime.date(2019, 5, 25).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 2).strftime("%d/%m/%Y"), venue='Somerset House', area='Central', keywords=[performance_art], entry_fee=22, user=gabe, image="https://img.artrabbit.com/events/block-universe-2019/images/j81L5lSARmXl/1500x937/web-background-01.webp")

    Event(name='diane arbus: in the beginning', start_date=datetime.date(2019, 2, 13).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 6).strftime("%d/%m/%Y"), venue='Hayward Gallery', area='Central', keywords=[photography, ny], entry_fee=15.5, user=v, image="https://www.bjp-online.com/wp-content/uploads/2018/10/DP356754-P1-jack-dracula.jpg")

    Event(name='Susan Hefuna: TEXTILES', start_date=datetime.date(2019, 5, 24).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 22).strftime("%d/%m/%Y"), venue='Pi Artworks', area='North London', keywords=[textiles], entry_fee=15.5, user=v, image="https://img.artrabbit.com/events/susan-hefuna-textiles-pi-artworks/images/HlTR29VrdtxI/815x699/Stand-Up-2019-Felt-Gaze-Thread-55-x-64-cm.webp")

    Event(name='Manga', start_date=datetime.date(2019, 5, 23).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 8, 26).strftime("%d/%m/%Y"), venue='British Museum', area='Central', keywords=[comics, manga, japan, illustration], entry_fee=20, user=gabe, image='https://www.artfund.org/thumbnail/908/assets/what-to-see/exhibitions/2019/05/manga/golden-kamuy.jpg')

    Event(name='Buddhism', start_date=datetime.date(2019, 10, 25).strftime("%d/%m/%Y"), end_date=datetime.date(2020, 2, 23).strftime("%d/%m/%Y"), venue='British Library', area='Central', keywords=[japan, illustration, manuscripts, india], entry_fee=14, user=gabe, image='https://www.bl.uk/britishlibrary/~/media/bl/global/whats%20on/exhibitions/buddhism/buddhism_624x351.jpg?crop=1&cropX=0&cropY=0&cropW=624&cropH=351&w=624&h=351&dispW=624&dispH=351')

    Event(name='Don McCullin', start_date=datetime.date(2019, 2, 5).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 6).strftime("%d/%m/%Y"), venue='British Library', area='Central', keywords=[photography, doc, war], entry_fee=20, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-720/public/id_145.jpg')

    Event(name='Chippy Dinner', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 30).strftime("%d/%m/%Y"), venue='PLAZA PLAZA', area='South East London', keywords=[painting], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/chippy-dinner/images/hNTeLFNhKSk1/366x513/Screen-Shot-2019-05-16-at-21-00-58.webp')

    Event(name='The Daughters of Medusa', start_date=datetime.date(2019, 5, 30).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 14).strftime("%d/%m/%Y"), venue='The Old Street Gallery', area='East London', keywords=[painting], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/the-daughters-of-medusa/images/hLVod9nuhFVm/1074x1500/Beneath-the-Veil.webp')


    Event(name='Art Now, Marguerite Humeau: Echoes', start_date=datetime.date(2017, 11, 18).strftime("%d/%m/%Y"), end_date=datetime.date(2018, 4, 15).strftime("%d/%m/%Y"), venue='Tate Britain', area='Central London', keywords=[emerging_artists, sound, sculpture], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/the-daughters-of-medusa/images/hLVod9nuhFVm/1074x1500/Beneath-the-Veil.webp', artists='Marguerite Humeau')

    Event(name='The Irresistible Force', start_date=datetime.date(2007, 9, 20).strftime("%d/%m/%Y"), end_date=datetime.date(2007, 11, 25).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[installation, emerging_artists], entry_fee=29, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-600/public/images/irresistable_force_tm_0.jpg', artists='Conrad Bakker, Matei Bejenaru, Tim Davis, Claire Fontaine, Mika Rottenberg, Michael Stevenson and Judi Werthein')

    Event(name='In Real Life', start_date=datetime.date(2019, 7, 11).strftime("%d/%m/%Y"), end_date=datetime.date(2020, 1, 5).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[installation, sculpture], entry_fee=18, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-600/public/your_uncertain_shadow_color.jpg', artists='Olafur Eliasson')


    Event(name='Franz West', start_date=datetime.date(2019, 2, 20).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 2).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[sculpture], entry_fee=13, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-340/public/franz_west_24.jpg', artists='Franz West')


    Event(name='Thirsty', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 7, 7).strftime("%d/%m/%Y"), venue='Picnic', area='South East London', keywords=[video], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/naomi-fitzsimmons-thirsty/images/daUlZLj7Sce5/1500x848/thirsty01.webp', artists='Naomi Fitzsimmons')

    Event(name='Observation Rooms', start_date=datetime.date(2019, 5, 3).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), venue='ARTHOUSE1', area='East London', keywords=[site_specific], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/observation-rooms/images/pPrtFaER0yE3/1024x1024/Sbroom.webp', artists='Justin Hibbs, Rosalind Davis, Sasha Bowles, Gibson/Martelli')


    Event(name='Lucia Pizzani: Coraza', start_date=datetime.date(2019, 5, 4).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 8).strftime("%d/%m/%Y"), venue='Cecilia Brunson Projects', area='South London', keywords=[photography, installation, performance_art, video], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/lucia-pizzani-coraza/images/w996wHrmtfBz/599x748/Screen-Shot-2019-03-26-at-14-44-33-copy.webp', artists='Lucia Pizzani')


    Event(name='State of Matter', start_date=datetime.date(2019, 3, 22).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 21).strftime("%d/%m/%Y"), venue='Vitrine London', area='South East London', keywords=[sculpture], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/kato-six-state-of-matter/images/POwFhe8K7JQq/1013x681/Kato-Six-Spinning-lines-twisting-thoughts-2017-Vitrine.webp', artists='Kato Six')

    Event(name='Machines do not make us into Machines', start_date=datetime.date(2019, 4, 17).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 30).strftime("%d/%m/%Y"), venue='White Cube Bermondsey', area='South East London', keywords=[sculpture, abstract], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/sarah-morris-machines-do-not-make-us-into-machines/images/R1tE8iIpb4ha/1185x1500/sarah-morris-white-cube-bermondsey-machines-do-not-make-us-into-machines-1.webp', artists='Sarah Morris')


    Event(name='A human touch', start_date=datetime.date(2019, 7, 2).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 7, 2).strftime("%d/%m/%Y"), venue='Bankside Gallery', area='Central London', keywords=[painting, drawing], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/juliet-wood-a-human-touch/images/r3djk1fbHcNE/1323x1500/JW-English-With-Ourmala-DSC-0048-copy.webp', artists='Juliet Wood')




    #artists=['Osamu Tezuka', 'Oda Eiichiro', 'Noda Satoru']

    db.commit()
