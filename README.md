<<<<<<< HEAD
<h2>Cómo ejecutar el proyecto</h2>
<p>Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.</p>
<ol>
    <li>
        <strong>Clonar el repositorio</strong>
        <br>
        git clone https://github.com/facu-Garcia/ApiFlask.git
        <br>
        cd ApiFlask
    </li>
    <li>
        <strong>Crear y activar un entorno virtual</strong>
        <br>
        <strong>🔹 Windows</strong>
        <br>
        python -m venv venv
        <br>
        venv\Scripts\activate
        <br><br>
        <strong>🔹 Linux / Mac</strong>
        <br>
        python3 -m venv venv
        <br>
        source venv/bin/activate
    </li>
    <li>
        <strong>Instalar las dependencias</strong>
        <br>
        pip install -r requirements.txt
    </li>
    <li>
        <strong>Configurar la base de datos</strong>
        <br>
        Si usas Flask-Migrate, ejecuta:
        <br>
        flask db upgrade
    </li>
    <li>
        <strong>Ejecutar el servidor Flask</strong>
        <br>
        flask run
    </li>
</ol>
<p>✅ La API estará disponible en: <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a></p>