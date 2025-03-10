Cómo ejecutar el proyecto
Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

1️⃣ Clonar el repositorio
git clone https://github.com/facu-Garcia/ApiFlask.git
cd ApiFlask

2️⃣ Crear y activar un entorno virtual

🔹 Windows
python -m venv venv
venv\Scripts\activate

🔹 Linux / Mac
python3 -m venv venv
source venv/bin/activate

3️⃣ Instalar las dependencias
pip install -r requirements.txt

4️⃣ Configurar la base de datos
Si usas Flask-Migrate, ejecuta:
flask db upgrade

5️⃣ Ejecutar el servidor Flask
flask run

✅ La API estará disponible en: http://127.0.0.1:5000/