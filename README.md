# Opus API

## Requerimientos ##

- nvm
- Node LTS (14.x.x)
- npm
- Docker

## Comenzando ##

##### local
0. Instalar dependencias: `npm i`.
1. Copiar las variables de entorno de ejemplo: `cat .env.example > .env`
2. Renombrar las variables de enterno del `.env` a los valores que usaras.
3. Correr el server: `npm run start:dev`

##### Con `docker-compose`
0. Instala todas las dependencias
1. Para levantar la imagen de Docker, Corre el comando `npm run build:docker`. 

<br>

> Podrás acceder al API desde esta url: https://localhost:3000

## Migraciones ##

Para las migraciones estamos utilizando el paquete [typeorm](https://typeorm.io/#/).

Para crear una nueva migración usamos este comando:

##### con `docker-compose`

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