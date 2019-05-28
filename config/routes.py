from app import app
from controllers import auth, events, keywords

app.register_blueprint(auth.router, url_prefix='/api')
app.register_blueprint(events.router, url_prefix='/api')
app.register_blueprint(keywords.router, url_prefix='/api')
