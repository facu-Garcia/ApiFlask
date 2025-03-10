from flask import Flask
from src.routes.routesCredito import home_bp
from src.database.conexion import init_app

def create_app():
    app = Flask(__name__, static_folder='static', template_folder='templates') 
    init_app(app)
    app.register_blueprint(home_bp)
    return app
