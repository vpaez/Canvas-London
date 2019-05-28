from app import app
from controllers import auth

app.register_blueprint(auth.router, url_prefix='/api')
