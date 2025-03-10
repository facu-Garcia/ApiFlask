from src.database.conexion import db

class Credito(db.Model):
    __tablename__ = 'creditos' 

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cliente = db.Column(db.String(100), nullable=False)
    monto = db.Column(db.Float, nullable=False)
    tasa_interes = db.Column(db.Float, nullable=False)
    plazo = db.Column(db.Integer, nullable=False)
    fecha_otorgamiento = db.Column(db.String(10), nullable=False)  

    def __init__(self, cliente, monto, tasa_interes, plazo, fecha_otorgamiento):
        self.cliente = cliente
        self.monto = monto
        self.tasa_interes = tasa_interes
        self.plazo = plazo
        self.fecha_otorgamiento = fecha_otorgamiento
        
    def __repr__(self):
        return f'<Credito {self.id}: {self.cliente}, {self.monto}>'