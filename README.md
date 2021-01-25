# Opus API

## Requerimientos ##

- Node LTS (14.x.x)
- npm

1- Corre el comando ```npm install```
2- Debes crear un archivo `.env` partiendo desde el `.env.example`.


## Migraciones ##

Para las migraciones estamos utilizando el paquete [typeorm](https://typeorm.io/#/).
Para crear una nueva migración usamos este comando:

```npx typeorm migration:create -n NombreDeLaMigracion```
