import datetime
from app import db
from datetime import date
from pony.orm import db_session
from models.Event import Event
from models.User import User, UserSchema
from models.Keyword import Keyword
from models.Artist import Artist

db.drop_all_tables(with_all_data=True)
db.create_tables()


avatar_1 = 'https://i.imgur.com/vjvpOox.jpg'
avatar_2 = 'https://i.imgur.com/iwYxNbB.jpg'
avatar_3 = 'https://i.imgur.com/GkO3ix0.jpg'
avatar_4 = 'https://i.imgur.com/p25szCt.jpg'
with db_session():

    schema = UserSchema()
    gabe = User(
        username='Gabelton',
        email='gabemcrrock@hotmail.co.uk',
        password_hash=schema.generate_hash('pass'),
        concession=True,
        avatar=avatar_1

    )
    violeta = User(
        username='Violeta',
        email='violepaez@gmail.com',
        password_hash=schema.generate_hash('pass'),
        concession=False,
        avatar=avatar_2
    )
    ade = User(
        username='Ade',
        email='ade@gmail.com',
        password_hash=schema.generate_hash('pass'),
        concession=True,
        avatar=avatar_3
    )
    aiman = User(
        username='Aiman',
        email='aiman@gmail.com',
        password_hash=schema.generate_hash('pass'),
        concession=False,
        avatar=avatar_4
    )
    valeria = User(
        username='Valeria',
        email='valeria@gmail.com',
        password_hash=schema.generate_hash('pass'),
        concession=True,
        avatar=avatar_1
    )
    paul = User(
        username='Paul',
        email='paul@gmail.com',
        password_hash=schema.generate_hash('pass'),
        concession=False,
        avatar=avatar_2
    )

    post_impressionism = Keyword(name='Post-Impressionism', events=[], users=[ade, violeta])
    dutch = Keyword(name='Dutch', events=[], users=[valeria, paul])
    painting = Keyword(name='Painting', events=[], users=[paul, gabe])
    photography = Keyword(name='Photography', events=[], users=[violeta, aiman])
    ny = Keyword(name='New York', events=[], users=[violeta, aiman, valeria])
    performance_art = Keyword(name='Performance art', events=[], users=[gabe, violeta])
    textiles = Keyword(name='Textiles', events=[], users=[gabe, violeta])
    comics = Keyword(name='Comics', events=[], users=[gabe, paul, valeria])
    manga = Keyword(name='Manga', events=[], users=[gabe, ade])
    japan = Keyword(name='Japan', events=[], users=gabe)
    illustration = Keyword(name='Illustration', events=[], users=gabe)
    manuscripts = Keyword(name='Manuscripts', events=[], users=gabe)
    india = Keyword(name='India', events=[], users=[aiman, violeta])
    doc = Keyword(name='Documentary', events=[], users=gabe)
    war = Keyword(name='War', events=[], users=violeta)
    sculpture = Keyword(name='Sculpture', events=[], users=violeta)
    emerging_artists = Keyword(name='Emerging artists', events=[], users=violeta)
    sound = Keyword(name='Sound', events=[], users=violeta)
    installation = Keyword(name='Installation', events=[], users=violeta)
    video = Keyword(name='Video', events=[], users=violeta)
    site_specific = Keyword(name='Site specific', events=[], users=violeta)
    abstract = Keyword(name='Abstract', events=[], users=violeta)
    drawing = Keyword(name='Drawing', events=[], users=violeta)

    van_gogh = Artist(name='Vincent Van Gogh', description='Vincent Willem van Gogh was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art.', image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/220px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg', dob='30 March 1853', dod='29 July 1890')
    arbus = Artist(name='Diane Arbus', description='Diane Arbus was an American photographer. Arbus famously worked to normalize marginalized groups and highlight the importance of proper representation of all people. She worked with a wide range of subjects including members of the LGBTQ+ community, strippers, carnival performers, nudists, dwarves, children, mothers, couples, elderly people, and middle-class families.', image='https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Diane-Arbus-1949.jpg/220px-Diane-Arbus-1949.jpg', dob='March 14, 1923 ', dod='July 26, 1971')
    hefuna = Artist(name='Susan Hefuna', dob='1962', description='Susan Hefuna is fascinated in the networks and structures of connection that inhabit public spaces and how they become the framework for peoples\' interactions with each other, in particular how these networks become visible through and influenced by architectural models and city planning. Upon arriving at a city, she spends a few days traversing its streets and squares until this calmative process lulls her into a state in which she feels ready to compose work that will capture the atmosphere of the location.')
    lippard = Artist(name='Hanne Lippard')
    riley = Artist(name='Bridget Riley')
    satoru = Artist(name='Noda Satoru', image='https://66.media.tumblr.com/a818bbef343c8d34fa1b89e0f4853585/tumblr_inline_ovxswirs7D1qld5ui_1280.jpg')
    mccullin = Artist(name='Don Mccullin')
    humeau = Artist(name='Marguerite Humeau')
    bakker = Artist(name='Conrad Bakker')
    bejenaru = Artist(name='Matei Bejenaru')
    davis = Artist(name='Tim Davis')
    ayres = Artist(name='Gillian Ayres')
    fontaine = Artist(name='Claire Fontaine', description='Paris-based collective founded in 2004. She describes herself in her biography as a ready-made artist stripped of use-value who intervenes in a world characterized, in part, by a ‘crisis of singularities’, or fixed identities.')
    rottenberg = Artist(name='Mika Rottenberg', description='Mika Rottenberg (born 1976) is a contemporary Argentine-Israeli video artist who lives and works in New York City. Rottenberg is best known for her surreal video and installation work that often deals with the subject of female labor. Her work has been exhibited both nationally and internationally.', dob='1976', image='https://cdn.magasin3.com/wp-content/uploads/2014/08/multimedia-17041-img.jpg')
    stevenson = Artist(name='Michael Stevenson')
    goldin = Artist(name='Nan Goldin')
    werthein = Artist(name='Judi Werthein')
    eliasson = Artist(name='Olafur Eliasson', description='Olafur Eliasson (Icelandic: Ólafur Elíasson; born 1967) is an Icelandic-Danish artist known for sculptures and large-scale installation art employing elemental materials such as light, water, and air temperature to enhance the viewer’s experience. In 1995 he established Studio Olafur Eliasson in Berlin, a laboratory for spatial research. Olafur represented Denmark at the 50th Venice Biennale in 2003 and later that year installed The Weather Project in the Turbine Hall of Tate Modern, London.', image='https://static01.nyt.com/images/2016/05/21/arts/21ELIASSON/21ELIASSON-articleLarge.jpg?quality=75&auto=webp&disable=upscale', dob='1967')
    west = Artist(name='Franz West', description='From abstract and interactive sculpture to furniture and collage, Franz West’s oeuvre possesses a character that is at once lighthearted and deeply philosophical. Belonging to a generation of artists exposed to the Actionist and Performance Art of the 1960s and 70s, West instinctively rejected the idea of a passive relationship between artwork and viewer. Opposed to the existential intensity requisite to his performative forebears (such as Actionism), he produced work that was vigorous and imposing yet unbounded and buoyant. In the seventies, he began creating compact, portable, mixed media sculptures called “Adaptives” (“Passstücke”).', image='https://upload.wikimedia.org/wikipedia/commons/a/ac/West%2CFranz-museum-ludwig-koeln-111209-web.jpg', dob='16 February 1947', dod='25 July 2012')
    fitzsimmons = Artist(name='Naomi Fitzsimmons')
    hibbs = Artist(name='Justin Hibbs')
    jackson = Artist(name='Sam Jackson')
    davis = Artist(name='Rosalind Davis')
    bowles = Artist(name='Sasha Bowles')
    martelli = Artist(name='Gibson/Martelli')
    pizzani = Artist(name='Lucia Pizzani')
    six = Artist(name='Kato Six')
    morris = Artist(name='Sarah Morris')
    wood = Artist(name='Juliet Wood')
    henri = Artist(name='Adrian Henri')
    rako = Artist(name='Michael Rakowitz')
    lehulere = Artist(name='Kemang Wa Lehulere')
    opie = Artist(name='Catherine Opie', description='Catherine Opie is an American fine-art photographer. She lives and works in West Adams, Los Angeles.She is currently a tenured professor of photography at University of California at Los Angeles (UCLA). Opie studies the relationships between mainstream and infrequent society, with a large emphasis on sexual identity, specializing in portraiture, studio, and landscape photography. Through photography Opie documents the connections between the individual and the space inhabited.', image='https://d3rtf5gv0re40d.cloudfront.net/anzax/55/559c0ad4-3290-466b-b4e7-39e03e7b6874_600_446.jpg', dob='1961')


    Event(name='Van Gogh in Britain', start_date=datetime.date(2019, 3, 27).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 11, 8).strftime("%d/%m/%Y"), venue='Tate Britain', area='Central', keywords=[post_impressionism, dutch, painting], entry_fee=22, concession_fee=20, user=gabe, image="https://www.tate.org.uk/sites/default/files/styles/width-600/public/van_gogh_self_portrait.jpg", artists=van_gogh)

    Event(name='Block Universe 2019', start_date=datetime.date(2019, 5, 25).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 2).strftime("%d/%m/%Y"), venue='Somerset House', area='Central', keywords=[performance_art], entry_fee=22, user=gabe, image="https://img.artrabbit.com/events/block-universe-2019/images/j81L5lSARmXl/1500x937/web-background-01.webp", artists=[lippard])

    Event(name='diane arbus: in the beginning', start_date=datetime.date(2019, 2, 13).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 6).strftime("%d/%m/%Y"), venue='Hayward Gallery', area='Central', keywords=[photography, ny], entry_fee=15.5, user=violeta, image="https://www.bjp-online.com/wp-content/uploads/2018/10/DP356754-P1-jack-dracula.jpg", artists=[arbus])

    Event(name='Susan Hefuna: TEXTILES', start_date=datetime.date(2019, 5, 24).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 22).strftime("%d/%m/%Y"), venue='Pi Artworks', area='North London', keywords=[textiles], entry_fee=15.5, user=violeta, image="https://img.artrabbit.com/events/susan-hefuna-textiles-pi-artworks/images/HlTR29VrdtxI/815x699/Stand-Up-2019-Felt-Gaze-Thread-55-x-64-cm.webp", artists=[hefuna])

    Event(name='Manga', start_date=datetime.date(2019, 5, 23).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 8, 26).strftime("%d/%m/%Y"), venue='British Museum', area='Central', keywords=[comics, manga, japan, illustration], entry_fee=20, user=gabe, image='https://www.artfund.org/thumbnail/908/assets/what-to-see/exhibitions/2019/05/manga/golden-kamuy.jpg', artists=[satoru])

    Event(name='Buddhism', start_date=datetime.date(2019, 10, 25).strftime("%d/%m/%Y"), end_date=datetime.date(2020, 2, 23).strftime("%d/%m/%Y"), venue='British Library', area='Central', keywords=[japan, illustration, manuscripts, india], entry_fee=14, user=gabe, image='https://www.bl.uk/britishlibrary/~/media/bl/global/whats%20on/exhibitions/buddhism/buddhism_624x351.jpg?crop=1&cropX=0&cropY=0&cropW=624&cropH=351&w=624&h=351&dispW=624&dispH=351', artists=[])

    Event(name='Don McCullin', start_date=datetime.date(2019, 2, 5).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 6).strftime("%d/%m/%Y"), venue='British Library', area='Central', keywords=[photography, doc, war], entry_fee=20, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-720/public/id_145.jpg', artists=[mccullin])

    Event(name='Chippy Dinner', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 30).strftime("%d/%m/%Y"), venue='PLAZA PLAZA', area='South East London', keywords=[painting], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/chippy-dinner/images/hNTeLFNhKSk1/366x513/Screen-Shot-2019-05-16-at-21-00-58.webp', artists=[])

    Event(name='The Daughters of Medusa', start_date=datetime.date(2019, 5, 30).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 14).strftime("%d/%m/%Y"), venue='The Old Street Gallery', area='East London', keywords=[painting], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/the-daughters-of-medusa/images/hLVod9nuhFVm/1074x1500/Beneath-the-Veil.webp', artists=[])


    Event(name='Art Now, Marguerite Humeau: Echoes', start_date=datetime.date(2017, 11, 18).strftime("%d/%m/%Y"), end_date=datetime.date(2018, 4, 15).strftime("%d/%m/%Y"), venue='Tate Britain', area='Central London', keywords=[emerging_artists, sound, sculpture], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/the-daughters-of-medusa/images/hLVod9nuhFVm/1074x1500/Beneath-the-Veil.webp', artists=[humeau])

    Event(name='The Irresistible Force', start_date=datetime.date(2007, 9, 20).strftime("%d/%m/%Y"), end_date=datetime.date(2007, 11, 25).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[installation, emerging_artists], entry_fee=29, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-600/public/images/irresistable_force_tm_0.jpg', artists=[bakker, bejenaru, davis, fontaine, rottenberg, stevenson, werthein])

    Event(name='In Real Life', start_date=datetime.date(2019, 7, 11).strftime("%d/%m/%Y"), end_date=datetime.date(2020, 1, 5).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[installation, sculpture], entry_fee=18, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-600/public/your_uncertain_shadow_color.jpg', artists=[eliasson])


    Event(name='Franz West', start_date=datetime.date(2019, 2, 20).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 2).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[sculpture], entry_fee=13, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-340/public/franz_west_24.jpg', artists=[west])


    Event(name='Thirsty', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 7, 7).strftime("%d/%m/%Y"), venue='Picnic', area='South East London', keywords=[video], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/naomi-fitzsimmons-thirsty/images/daUlZLj7Sce5/1500x848/thirsty01.webp', artists=[fitzsimmons])

    Event(name='Observation Rooms', start_date=datetime.date(2019, 5, 3).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), venue='ARTHOUSE1', area='East London', keywords=[site_specific], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/observation-rooms/images/pPrtFaER0yE3/1024x1024/Sbroom.webp', artists=[hibbs, davis, bowles, martelli])


    Event(name='Lucia Pizzani: Coraza', start_date=datetime.date(2019, 5, 4).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 8).strftime("%d/%m/%Y"), venue='Cecilia Brunson Projects', area='South London', keywords=[photography, installation, performance_art, video], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/lucia-pizzani-coraza/images/w996wHrmtfBz/599x748/Screen-Shot-2019-03-26-at-14-44-33-copy.webp', artists=[pizzani])


    Event(name='State of Matter', start_date=datetime.date(2019, 3, 22).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 21).strftime("%d/%m/%Y"), venue='Vitrine London', area='South East London', keywords=[sculpture], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/kato-six-state-of-matter/images/POwFhe8K7JQq/1013x681/Kato-Six-Spinning-lines-twisting-thoughts-2017-Vitrine.webp', artists=[six])

    Event(name='Machines do not make us into Machines', start_date=datetime.date(2019, 4, 17).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 30).strftime("%d/%m/%Y"), venue='White Cube Bermondsey', area='South East London', keywords=[sculpture, abstract], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/sarah-morris-machines-do-not-make-us-into-machines/images/R1tE8iIpb4ha/1185x1500/sarah-morris-white-cube-bermondsey-machines-do-not-make-us-into-machines-1.webp', artists=[morris])


    Event(name='A human touch', start_date=datetime.date(2019, 7, 2).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 7, 2).strftime("%d/%m/%Y"), venue='Bankside Gallery', area='Central London', keywords=[painting, drawing], entry_fee=0, user=gabe, image='https://img.artrabbit.com/events/juliet-wood-a-human-touch/images/r3djk1fbHcNE/1323x1500/JW-English-With-Ourmala-DSC-0048-copy.webp', artists=[wood])

    Event(name='City Poems and City Music', start_date=datetime.date(2019, 4, 11).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 9).strftime("%d/%m/%Y"), venue='Whitechapel Gallery', area='East London', keywords=[painting, sound], entry_fee=0, user=gabe, image='https://www.whitechapelgallery.org/wp-content/uploads/2019/02/City-Poems-and-City-Music-AH-with-light-show-background_370x280-570x428.jpg', artists=[henri])

    Event(name='Chronicles', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 6, 29).strftime("%d/%m/%Y"), venue='Old Street', area='East London', keywords=[painting], entry_fee=0, user=gabe, image='https://charliesmithlondon.com/wp-content/uploads/2014/02/Homeslider-SJ-19-1.jpg', artists=[jackson])


    Event(name='KEMANG WA LEHULERE', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 10, 6).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[sculpture], entry_fee=0, user=gabe, image='https://www.tate.org.uk/sites/default/files/styles/width-600/public/thumbnail_8_1.jpg', artists=[lehulere])

    Event(name='Nan Goldin', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 10, 27).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[photography], entry_fee=20, user=gabe, image='https://www.tate.org.uk/art/images/work/P/P78/P78046_9.jpg', artists=[goldin])

    Event(name='Spotlights: Gillian Ayres', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 10, 31).strftime("%d/%m/%Y"), venue='Tate Britain', area='Central London', keywords=[painting], entry_fee=20, user=gabe, image='https://www.tate.org.uk/art/images/work/T/T06/T06994_9.jpg', artists=[ayres])

    Event(name='In the studio: Bridget Riley', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 11, 10).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[painting], entry_fee=20, user=violeta, image='https://www.tate.org.uk/art/images/work/T/T06/T06859_9.jpg', artists=[riley])


    Event(name='Artists and Society: Catherine Opie', start_date=datetime.date(2019, 5, 31).strftime("%d/%m/%Y"), end_date=datetime.date(2019, 11, 17).strftime("%d/%m/%Y"), venue='Tate Modern', area='Central London', keywords=[photography], entry_fee=20, user=violeta, image='https://www.tate.org.uk/sites/default/files/styles/width-600/public/thumbnail_5.png', artists=[opie])







    #artists=['Osamu Tezuka', 'Oda Eiichiro', 'Noda Satoru']

    db.commit()
