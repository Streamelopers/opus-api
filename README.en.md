# Opus API

[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/Streamelopers/opus-api/blob/main/README.md)

## Requirements ##

- [nvm](https://github.com/nvm-sh/nvm)
- Node LTS (14.x.x)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [PostgresSQL](https://www.postgresql.org/download/) (Optional)

## First steps ##

You have two options for serving the api:

- Using `docker-compose` (preferable)
- Serving the api manually

### Preparation

0. Open a console window and navigate to the root folder of the project.
1. Copy the example environment variables: `cat .env.example > .env`
2. Rename environment variables from `.env` to the values you will use for database connection and so on. The default values work for docker deployment.

### a) With `docker-compose`
0. Install all dependencies `npm install`
1. To build the Docker image, run the command `npm run build:docker`

### b) Working on your local server
0. Install all dependencies `npm install`
1. Run the API with this command: `npm run start:dev`
2. Make sure you have an instance of [PostgresSQL](https://www.postgresql.org/download/) version 12 available.
3. Run the database migrations: `npm run migration:run`

<br>

> You will be able to access the API from this url: https://localhost:3000

## Migrations ##

For migrations we are using the [typeorm](https://typeorm.io/#/) package.

To create a new migration we use this command:

### With `docker-compose` ###


Create a migration:
```sh
docker exec -it opus-api npm run migrate:create MigrationName
```

To run migrations you must run them inside the container:

```sh
docker exec -it opus-api npm run migrate:run
```

##### local

```sh
npm run migrate:create MigrationName
```

```sh
npm run migrate:run
```