# Opus API

## Requerimientos ##

- nvm
- Node LTS (14.x.x)
- npm
- Docker

## Comenzando ##

0. Instala todas las dependencias
1. Para levantar la imagen de Docker, Corre el comando `npm run build:docker`. 
2. Podrás acceder al API desde esta url: https://localhost:3000

## Migraciones ##

Para las migraciones estamos utilizando el paquete [typeorm](https://typeorm.io/#/).

Para crear una nueva migración usamos este comando:

```sh
docker exec -it opus-api npm run migrate:create NombreDeLaMigracion
```

Para correr migraciones debes correrlas dentro del contenedor

```sh
docker exec -it opus-api npm run migrate:run
```