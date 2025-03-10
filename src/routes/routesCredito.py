from flask import Blueprint, render_template, request, jsonify,  redirect, url_for
from src.database.conexion import db
from src.models.modelCredito import Credito

home_bp = Blueprint('home', __name__)

@home_bp.route('/')
def index():
    return redirect(url_for('home.home'))  

@home_bp.route('/creditos')
def home():
    creditos = Credito.query.all()
    return render_template('index.html', creditos=creditos)

@home_bp.route('/creditos/<int:id>', methods=['GET'])
def obtener_credito(id):
    credito = Credito.query.get(id)
    if not credito:
        return jsonify({'error': 'Crédito no encontrado'}), 404

    return jsonify({
        'id': credito.id,
        'cliente': credito.cliente,
        'monto': credito.monto,
        'tasa_interes': credito.tasa_interes,
        'plazo': credito.plazo,
        'fecha_otorgamiento': str(credito.fecha_otorgamiento)  
    }), 200


@home_bp.route('/creditos', methods=['POST'])
def crear_credito():
    data = request.get_json()
    nuevo_credito = Credito(
        cliente=data['cliente'],
        monto=data['monto'],
        tasa_interes=data['tasa_interes'],
        plazo=data['plazo'],
        fecha_otorgamiento=data['fecha_otorgamiento']
    )
    db.session.add(nuevo_credito)
    db.session.commit()
    return jsonify({'mensaje': 'Crédito creado con éxito'}), 201

@home_bp.route('/creditos/<int:id>', methods=['PUT'])
def actualizar_credito(id):
    data = request.get_json()
    credito = Credito.query.get(id)
    if not credito:
        return jsonify({'error': 'Crédito no encontrado'}), 404

    credito.cliente = data['cliente']
    credito.monto = data['monto']
    credito.tasa_interes = data['tasa_interes']
    credito.plazo = data['plazo']
    credito.fecha_otorgamiento = data['fecha_otorgamiento']

    db.session.commit()
    return jsonify({'mensaje': 'Crédito actualizado'}), 200


@home_bp.route('/creditos/<int:id>', methods=['DELETE'])
def eliminar_credito(id):
    credito = Credito.query.get(id)
    if not credito:
        return jsonify({'error': 'Crédito no encontrado'}), 404

    db.session.delete(credito)
    db.session.commit()
    return jsonify({'mensaje': 'Crédito eliminado'}), 200
