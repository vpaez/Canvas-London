import os
from app import app

from controllers import auth, events, keywords, artists, contacts

app.register_blueprint(auth.router, url_prefix='/api')
app.register_blueprint(events.router, url_prefix='/api')
app.register_blueprint(keywords.router, url_prefix='/api')
app.register_blueprint(artists.router, url_prefix='/api')
app.register_blueprint(contacts.router, url_prefix='/api')

@app.route('/')
@app.route('/<path:path>')
def catch_all(path='index.html'):

    if os.path.isfile('public/' + path):
        return app.send_static_file(path)

    return app.send_static_file('index.html')
