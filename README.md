# Opus API

## Requerimientos ##

- [nvm](https://github.com/nvm-sh/nvm)
- Node LTS (14.x.x)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [PostgresSQL](https://www.postgresql.org/download/) (Opcional)

## Pimeros pasos ##

Tienes dos opciones para servir el api:

- Usando `docker-compose` (preferible)
- Servir el api manualmente

### Preparación

0. Abre una ventana de consola y navega a la carpeta raíz del proyecto.
1. Copiar las variables de entorno de ejemplo: `cat .env.example > .env`
2. Renombrar las variables de enterno del `.env` a los valores que usarás para la conexión de base de datos y demás. Los valores por defecto funcionan para el despliegue con docker.

### a) Con `docker-compose`
0. Instala todas las dependencias `npm install`
1. Para levantar la imagen de Docker, corre el comando `npm run build:docker`

### b) Trabajando en tu servidor local
0. Instala todas las dependencias `npm install`
1. Corre el API con este comando: `npm run start:dev`
2. Asegurate de tener a disposición una instancia de la versión 12 de [PostgresSQL](https://www.postgresql.org/download/)
3. Corre las migraciones de la base de datos: `npm run migration:run`

<br>

> Podrás acceder al API desde esta url: https://localhost:3000

## Migraciones ##

Para las migraciones estamos utilizando el paquete [typeorm](https://typeorm.io/#/).

Para crear una nueva migración usamos este comando:

### Con `docker-compose` ###


Crear una migración:
```sh
docker exec -it opus-api npm run migrate:create NombreDeLaMigracion
```

Para correr migraciones debes correrlas dentro del contenedor:

```sh
docker exec -it opus-api npm run migrate:run
```

##### local

```sh
npm run migrate:create NombreDeLaMigracion
```

```sh
npm run migrate:run
```