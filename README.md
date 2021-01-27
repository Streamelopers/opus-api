# Opus API

## Requerimientos ##

- Node LTS (14.x.x)
- npm

1- Corre el comando ```npm install```
2- Debes crear un archivo `.env` partiendo desde el `.env.example`.


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

## Seeders

Para correr todos los seeders
```sh
npm run seed:run
```
