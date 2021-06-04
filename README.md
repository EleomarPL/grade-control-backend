# Gestiona tus calificaciones

Sitio web (backend) donde puedes gestionar tus calificaciones en la nube, creando, editando y eliminando tus calificaciones y usuarios, así como tener un historial de tus operaciones.

# Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

- NodeJS versión 10.16 o superior
- NPM versión 5.6 o superior

### Instalación (desarrollo) 🔧

Antes de ejecutar debes crear un archivo _.env_ y declarar 2 variables de entorno, que son:
- STRING_CONNECTION, que deberá tener la API de conexión a mongoDB
- WORD_SECRET, la palabra secreta con la que se firmara el token

Les recomiendo no compartir estos datos

Tal vez suene muy obvio pero primero clone el repositorio

```
    git clone https://github.com/EleomarPL/grade-control-backend
```

Instale las dependencias. Las depedencias ya se encuentran implicitas en el Package del proyecto, solo basta ejecutar la siguiente instrucción:

```
    npm i
```

Ejecute el proyecto mediante el script (no se detectan cambios):

```
    npm start
```

También puedes ejecutar el código de la siguiente forma, que es la recomendable para el desarrollo, pues detecta los cambios que ejecutes al refrescar (hot reload), y es mediante el script:

```
    npm run start-dev
```

## Construido con 🛠️

- NodeJS y Express
- MongoDB

Principalmente se construyeron con las tecnologías anteriores, aunque, cabe mencionar el uso de múltiples dependencias mas.

## Contribuyendo 🖇️

> Las Pull Request son bienvenidas. Para cambios importantes, primero abra un problema para discutir lo que le gustaría cambiar.
> Asegúrese de actualizar las pruebas según corresponda.

## Expresiones de Gratitud 🎁

Si el proyecto te gusto, o te sirvio para aprender nuevas cosas, puedes agradecernos de la siguiente forma:

- Coméntale a otros sobre este proyecto 📢
- Regala una estrella a este proyecto ⭐
- Da las gracias públicamente 🤓.
