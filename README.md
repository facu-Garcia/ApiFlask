
<header>
<h1>Registro de Creditos (Api)</h1>
</header>
<div>
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
<strong>Ejecutar el servidor Flask</strong>
<pre><code>flask run</code></pre>
</li>
</ol>
<p>✅ La aplicación estará disponible en: <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a></p>
</section>



<section>
  <h2>Estructura del Proyecto</h2>
  <p>El proyecto sigue una estructura modular para mantener el código organizado:</p>
  <pre><code>
ApiFlask/
├── app.py
├── requirements.txt
├── instance/
│   └── database.db
├── src/
│   ├── __init__.py
│   ├── database/
│   │   └── conexion.py
│   ├── models/
│   │   └── modelCredito.py
│   ├── routes/
│   │   └── routesCredito.py
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       └── main.js
│   └── templates/
│       └── index.html
├── README.md
  </code></pre>
  <ul>
    <li><code>app.py</code>: Archivo principal que inicia la aplicación Flask.</li>
    <li><code>requirements.txt</code>: Archivo que lista las dependencias del proyecto, permitiendo instalar fácilmente los paquetes necesarios utilizando <code>pip</code>.</li>
    <li><code>/instance/</code>: Carpeta que contiene archivos específicos de la instancia de la aplicación.
      <ul>
        <li><code>database.db</code>: Archivo de base de datos SQLite utilizado por la aplicación para almacenar datos.</li>
      </ul>
    </li>
    <li><code>/src/</code>: Carpeta que contiene los módulos de la aplicación.
      <ul>
        <li><code>/__init__.py</code>: Archivo que convierte el directorio en un paquete Python y puede contener la inicialización de la aplicación.</li>
        <li><code>/database/</code>: Carpeta que maneja la conexión y operaciones relacionadas con la base de datos.
          <ul>
            <li><code>conexion.py</code>: Archivo que contiene funciones o clases para establecer y gestionar la conexión a la base de datos.</li>
          </ul>
        </li>
        <li><code>/models/</code>: Carpeta que define los modelos de datos utilizados en la aplicación.
          <ul>
            <li><code>modelCredito.py</code>: Archivo que define el modelo relacionado con los créditos en la aplicación.</li>
          </ul>
        </li>
        <li><code>/routes/</code>: Carpeta que define las rutas y la lógica de negocio asociada a ellas.
          <ul>
            <li><code>routesCredito.py</code>: Archivo que contiene las rutas y funciones relacionadas con la gestión de créditos.</li>
          </ul>
        </li>
        <li><code>/static/</code>: Carpeta que almacena archivos estáticos accesibles públicamente, como hojas de estilo y scripts.
          <ul>
            <li><code>/css/</code>: Carpeta que contiene archivos de estilo en cascada (CSS).
              <ul>
                <li><code>styles.css</code>: Archivo que define los estilos visuales de la aplicación.</li>
              </ul>
            </li>
            <li><code>/js/</code>: Carpeta que contiene archivos de JavaScript.
              <ul>
                <li><code>main.js</code>: Archivo que contiene scripts para la interactividad y funcionalidades del lado del cliente.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><code>/templates/</code>: Carpeta que contiene las plantillas HTML utilizadas para renderizar las vistas de la aplicación.
          <ul>
            <li><code>index.html</code>: Plantilla principal que se renderiza en la página de inicio de la aplicación.</li>
          </ul>
        </li>
      </ul>
    </li>
    </section>

