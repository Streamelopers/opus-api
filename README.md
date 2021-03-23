# Opus API

## Requerimientos ##

- Node LTS (14.x.x)
- npm
- Docker

1. Corre el comando `npm run build:docker`. 
2. En caso de que no quieras usar docker, puedes proceder con `npm run build:local`.


## Migraciones ##

Para las migraciones estamos utilizando el paquete [typeorm](https://typeorm.io/#/).
Para crear una nueva migración usamos este comando:

```sh
npm run migrate:create NombreDeLaMigracion
```

Correr migraciones

```sh
npm run migrate:run
```