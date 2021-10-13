# Opus API

## Table of Contents

- [Opus API](#opus-api)
  - [Table of contents](#table-of-contents)
  - [Description and context](#description-and-context)
  - [Service reference](#service-reference)
  - [Requirements](#requirements)
  - [How to start](#how-to-start)
  - [development stack](#development-stack)
    - [Server](#server)
    - [Database](#database-database)
  - [Disclaimer](#disclaimer)
  - [Contributors](#contributors)

## Description and context

This is the service that manages the information of [Opus](https://opus.do).

## Service reference

- [Documentation in Spanish 🇪🇸](./../../README.md)
- [Documentation in French 🇫🇷](./README.fr.md)

## Requirements

- [Resource requirements](./docs/requirements/endpoints.md)
- [Entity requirements](./docs/requirements/entities.md)

## How to start

Would you like to collaborate? Here are the steps to follow to get down to work.

### Dependencies

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

### Preparation of development environment

To start with the development it is necessary to make some configurations before to maintain the project standard.

> As you may have seen before, _Visual Studio Code_ is the main text editor used in this project, however, feel free to use any editor or IDE of your choice.

### Clone the project

You can clone the project in any directory of your choice, but we recommend creating an `opus` directory on the home of your operating system.

```sh
mkdir ~/opus
```

```sh
git clone https://github.com/Streamelopers/opus-api.git
```

In case you have correctly set the environment variable of the Visual Studio Code executable, you can choose to open the project with the following command:

```sh
code opus-api
```

### Installing extensions

> If you do not use _Visual Studio Code_, skip this step.

It is very likely that when you open the project for the first time in _Visual Studio Code_ you will be shown an alert like the following:
![Extension installation recommendation](./docs/assets/img/install-extensions-recommendation.png)

This makes it easy to install extensions that will facilitate development during your collaboration with this project.

> In case the installation recommendation alert is not displayed, you can get to install these dependencies manually. You can take a look at the [.vscode/extensions.json](./.Vscode/extensions.json) file.

### Creation of environment variables file

The litmus test to know if an application has all its configuration correctly separated from the code is to verify that the base code can be converted to open source at any time, without compromising the credentials. For this reason, we must create our environment variable file `.env`. For this, we execute the following command:

```sh
cp .env.example .env
```

> Feel free to change the credentials to your liking.

### Run the project

To facilitate the start of your collaboration and avoid dependency problems, the project implements `docker-compose`.

> Feel free to run the project without using Docker, but it is important to know that you will not be able to count on the support of the community. If you don't know Docker, you can quickly learn the basics [here](https://docs.docker.com/get-started/).

We navigate to the directory where the project is located:

```sh
cd ~/opus/opus-api
```

We execute the following command through `npm`:

```sh
npm run start:docker
```

> This script executes the following `docker-compose up` command which in turn feeds from the `docker-compose.yml` file.

After this, the project should start in a few seconds.

### Resource definition

You can view the resources of the service by accessing: http://localhost:5000/swagger.

## Development stack

### Server

- Node.js
  - Nest.js Framework
- Docker

### Database

- Postgres

## Disclaimer

The information exposed through this service comes from the local database.

## Contributors

- [Enmanuel Toribio](https://github.com/eatskolnikov)
- [Hector Aristy](https://github.com/Hekotoru)
- [Jose M. Segura Polanco](https://github.com/DarkCode01)
- [Jadhiel Vélez](https://github.com/Jadhielv)
- [Marluan Espiritusanto](https://github.com/marluanespiritusanto)
