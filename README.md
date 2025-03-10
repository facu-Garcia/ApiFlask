
<style>
body {
font-family: Arial, sans-serif;
line-height: 1.6;
margin: 0;
padding: 0;
background-color: #f4f4f4;
}

.container {
width: 80%;
margin: auto;
overflow: hidden;
}

header {
background: #333;
color: #fff;
padding-top: 30px;
min-height: 70px;
border-bottom: #77aaff 5px solid;
}

h1 {
text-align: center;
text-transform: uppercase;
margin: 0;
font-size: px;
color: #333;
}

section {
padding: 20px;
background: #fff;
margin-top: 10px;
}

h2 {
color: #333;
}

code {
background: #eee;
padding: 2px 4px;
font-size: 90%;
}

pre {
background: #eee;
padding: 10px;
overflow-x: auto;
}
</style>

<body>
<header>
<h1>Documentación del Proyecto</h1>
</header>
<div class="container">
<section>
<h2>Descripción del Proyecto</h2>
<p>Este proyecto es una aplicación web desarrollada con Flask que gestiona registros de créditos. Permite
crear, leer, actualizar y eliminar información relacionada con créditos, incluyendo detalles como el
cliente, monto, tasa de interés, plazo y fecha de otorgamiento.</p>
</section>

<section>
<h2>Características</h2>
<ul>
<li>Visualización de una lista de créditos existentes.</li>
<li>Creación de nuevos registros de crédito.</li>
<li>Edición de registros de crédito existentes.</li>
<li>Eliminación de registros de crédito.</li>
<li>Búsqueda de créditos por nombre de cliente.</li>
<li>Visualización de gráficos relacionados con los créditos.</li>
</ul>
</section>

<section>
<h2>Requisitos Previos</h2>
<p>Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes componentes:</p>
<ul>
<li>Python 3.x</li>
<li>Flask</li>
<li>Flask SQLAlchemy</li>
<li>Chart.js (para gráficos en el frontend)</li>
</ul>
</section>

<section>
<h2>Instalación y Ejecución</h2>
<ol>
<li>
<strong>Clonar el repositorio</strong>
<pre><code>git clone https://github.com/facu-Garcia/ApiFlask.git
cd ApiFlask</code></pre>
</li>
<li>
<strong>Crear y activar un entorno virtual</strong>
<p><strong>🔹 Windows</strong></p>
<pre><code>python -m venv venv
venv\Scripts\activate</code></pre>
<p><strong>🔹 Linux / Mac</strong></p>
<pre><code>python3 -m venv venv
source venv/bin/activate</code></pre>
</li>
<li>
<strong>Instalar las dependencias</strong>
<pre><code>pip install -r requirements.txt</code></pre>
</li>
<li>
<strong>Configurar la base de datos</strong>
<p>Si usas Flask-Migrate, ejecuta:</p>
<pre><code>flask db upgrade</code></pre>
</li>
<li>
<strong>Ejecutar el servidor Flask</strong>
<pre><code>flask run</code></pre>
</li>
</ol>
<p>✅ La aplicación estará disponible en: <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a></p>
</section>

<section>
<h2>Uso de la Aplicación</h2>
<p>Una vez que la aplicación esté en funcionamiento, puedes acceder a las siguientes funcionalidades:</p>
<ul>
<li><strong>Ver créditos:</strong> La página principal muestra una tabla con todos los créditos registrados.</li>
<li><strong>Agregar nuevo crédito:</strong> Haz clic en "Nuevo Registro" y completa el formulario para añadir un nuevo crédito.</li>
<li><strong>Editar crédito:</strong> En la tabla de créditos, haz clic en el ícono de edición junto al crédito que deseas modificar.</li>
<li><strong>Eliminar crédito:</strong> En la tabla de créditos, haz clic en el ícono de eliminación junto al crédito que deseas eliminar.</li>
<li><strong>Buscar crédito:</strong> Utiliza la barra de búsqueda para encontrar créditos por nombre de cliente.</li>
<li><strong>Ver gráficos:</strong> Haz clic en el botón "Gráfica" para visualizar representaciones gráficas de los datos de créditos.</li>
</ul>
</section>

<section>
<h2>Estructura del Proyecto</h2>
<p>El proyecto sigue una estructura modular para mantener el código organizado:</p>
<ul>
<li><code>app.py</code>: Archivo principal que inicia la aplicación Flask.</li>
<li><code>/templates/</code>: Carpeta que contiene las plantillas HTML.</li>
<li><code>/static/</code>: Carpeta para archivos estáticos como CSS, JavaScript e imágenes.</li>
<li><code>/src/</code>: Contiene los módulos de la aplicación.
<ul>
    <li><code>/database/</code>: Configuración de la base de datos.</li>
    <li><code>/models/</code>: Definición de los modelos de datos.</li>
    <li><code>/routes/</code>: Definición de las rutas y lógica de negocio.</li>
</ul>
</li>
</ul>
</section>

 

</body>