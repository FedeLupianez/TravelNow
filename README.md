# TravelNow 
## Lupiañez Federico 6to "A" ISMDF

### Despliegue de la app
Hay varias formas de desplegar este repositorio, una de ellas es con Make, para esto hice un archivo Makefile en el cual están los siguientes comandos:

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

Como segunda manera de desplegar la app, se puede ejecutar el archivo `deploy.bat` en la raíz del proyecto. De esta manera se va a desplegar automáticamente con solo un comando.
[!IMPORTANT]
> **Se debe ejecutar este archivo una vez que el entorno virtual y las dependencias del backend están instaladas**
```bash
./deploy.bat
```



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






