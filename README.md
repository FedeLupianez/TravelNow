# TravelNow 
## Lupiañez Federico 6to "A" ISMDF

### Despliegue de la app
Hay varias formas de desplegar este repositorio, las cuales voy a detallas a continuación :

#### Make:
Una de las formas es con Make, para esto hice un archivo Makefile en el cual están los siguientes comandos:

```bash
make init
make front
make back
make all
```


- `make init` -> Inicializa el entorno virtual del backend, creando un entorno .venv e instalando las despendencias
- `make front` -> Despliega solo el Frontend en localhost:8000
- `make back` -> Despliega solo el Backend en localhost:8080
- `make all` -> Despliega el Frontend y el Backend en localhost:8000 y localhost:8080 respectivamente

### bat script :
Como segunda manera de desplegar la app, se puede ejecutar el archivo `deploy.bat` en la carpeta `scripts` de la raíz proyecto. De esta manera se va a desplegar automáticamente con solo un comando.

```bash
cd scripts
./deploy.bat
```
Este archivo va a abrir dos cmd nuevas, una para desplegar el Backend y otra para el Frontend. Una vez ejecutado solo debe abrir una nueva ventana en el navegador y abrir la ruta `http://localhost:8000/Frontend` para ver la página.

#### Forma manual:
Para desplegar la app manualmente vamos a inicializar el entorno del Backend, para ello nos vamos dirigir a una nueva terminal y ejecutar los siguientes comandos para instalar las dependencias necesarias :

```bash
cd Backend
python -m venv .venv
.venv/Scripts/activate
python -m pip install -r requirements.txt
```

De esta forma, se habrá creado un entorno virtual en la carpeta Backend con las dependencias que utiliza la api.

Para desplegarlo, basta con ejecutar el siguiente comando que desplegará la API con uvicorn en el puerto 8080:
```bash
uvicorn app.main:main_app --host 0.0.0.0 --port 8080
```
De esta manera se desplegará el Backend en http://localhost:8080.


Ahora bien, para desplegar el Frontend, en una nueva terminal nos debemos de dirigir a la carpeta raíz del proyecto y ejecutar el archivo `server.py`, que actuará como servidor HTTP local:
```bash
python server.py
```
Con esto el Frontend se desplegará en http://localhost:8000 y podrá visitar la página en http://localhost:8000/Frontend.



### Estructura de carpetas

- README.md -> Este archivo
- server.py -> Archivo que crea un servidor http en python para desplegar el frontend.
- Makefile -> Archivo de Make

- `Backend` -> Contiene los archivos del backend
   - interior -> archivos de configuración
      - Si se crea un archivo .env con la variable YAGMAIL_PWD (password de aplicación de google) va a poder recibir los emails de contacto que se envíen
   - app.log -> archivo de logs.
   - pyproject.toml -> Archivo de configuración de uv.
   - requirements.txt -> Archivos de dependencias requeridas.
   - `app` -> Carpeta con el src de la API
      - main.py -> Archivo principal de la API
      - database.py -> Archivo que contiene una clase Database para simular una base de datos. Esta utiliza los archivos .json que están en la carpeta `data` como tablas.
      - dependencies.py -> Archivo con dependencias de la API, como la config.
      - `Destinations` -> Carpeta con el el router de los destinos.
      - `Social` -> Carpeta con el el router de cosas relacionadas a contactos y servicios de la empresa.


- `Frontend` -> Contiene los archivos del frontend
   - app.js -> Archivo que contiene la lógica de la página de inicio.
   - cards.json -> Archivo con destinos mockeados por si falla el backend.
   - index.html -> Archivo de la página de inicio.
   - index.css -> Archivo de estilos de la página de inicio.
   - global.css -> Archivo de estilos globales.
   - `scripts` -> Carpeta que contiene archivos js con códigos pequeños que se usan en la página de inicio. (Esto se repite en todo el repo).
   - `styles` -> Carpeta que contiene archivos css con códigos pequeños que se usan en la página de inicio. (Esto se repite en todo el repo).
   - `components` -> Carpeta que contiene los componentes creados en javascript para utilizar globalmente. (Cada componente tiene su archivo js y su css).
      - `Header` -> Header para toda la página.
      - `Footer` -> Footer para toda la página.
      - `Card` -> Componente de tarjeta de destinos.
      - `Like_Button` -> Componente de botón de like.
      - `Spot_modal` -> Componente de modal con video promocional.
   - `routes` -> Carpeta que contiene las rutas de la página.
      - `contact` -> Página de contacto.
      - `destination` -> Página para un destino específico.(esta va variando de acuerdo al destino seleccionado en el index).






