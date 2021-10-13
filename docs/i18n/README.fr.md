# Opus API

## Table des matières

- [API Opus](#opus-api)
  - [Table des matières](#table-des-matières)
  - [Description et contexte](#description-and-context)
  - [Référence de service](#référence-de-service)
  - [Exigences](#nombre-d-exigences)
  - [Comment commencer](#comment-commencer)
  - [pile de développement](#development-stack)
    - [Serveur](#serveur)
    - [Base de données](#base-de-données-base-de-données)
  - [Avis de non-responsabilité](#avertissement)
  - [Contributeurs](#contributeurs)

## Description et contexte

C'est le service qui gère les informations de [Opus](https://opus.do).

## Référence de service

- [Documentation en anglais 🇺🇸](./README.en.md)
- [Documentation en espagnole 🇪🇸](./../../README.md)

## Conditions

- [Exigences en matière de ressources](./docs/requirements/endpoints.md)
- [Exigences de l'entité](./docs/requirements/entity.md)

## Comment commencer

Souhaitez-vous collaborer? Voici les étapes à suivre pour vous mettre au travail.

### Dépendances

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

### Préparation de l'environnement de développement

Pour commencer le développement il est nécessaire de faire quelques configurations avant de maintenir le standard du projet.

> Comme vous l'avez peut-être déjà vu, _Visual Studio Code_ est le principal éditeur de texte utilisé dans ce projet, cependant, n'hésitez pas à utiliser n'importe quel éditeur ou IDE de votre choix.

### Cloner le projet

Vous pouvez cloner le projet dans n'importe quel répertoire de votre choix, mais nous vous recommandons de créer un répertoire `opus` sur la base de votre système d'exploitation.

```sh
mkdir ~/opus
```

```sh
git clone https://github.com/Streamelopers/opus-api.git
```

Si vous avez correctement défini la variable d'environnement de l'exécutable Visual Studio Code, vous pouvez choisir d'ouvrir le projet avec la commande suivante :

```sh
code opus-api
```

### Installation d'extensions

> Si vous n'utilisez pas _Visual Studio Code_, ignorez cette étape.

Il est très probable que lorsque vous ouvrez le projet pour la première fois dans _Visual Studio Code_, une alerte semblable à celle-ci s'affiche :
![Recommandation d'installation d'extension](./docs/assets/img/install-extensions-recommendation.png)

Cela facilite l'installation d'extensions qui faciliteront le développement lors de votre collaboration avec ce projet.

> Si l'alerte de recommandation d'installation ne s'affiche pas, vous pouvez installer ces dépendances manuellement. Vous pouvez jeter un œil au fichier [.vscode/extensions.json](./.Vscode/extensions.json).

### Création d'un fichier de variables d'environnement

Le test décisif pour savoir si une application a toute sa configuration correctement séparée du code est de vérifier que le code de base peut être converti en open source à tout moment, sans compromettre les informations d'identification. Pour cette raison, nous devons créer notre fichier de variables d'environnement `.env`. Pour cela, nous exécutons la commande suivante :

```sh
cp .env.exemple .env
```

> N'hésitez pas à modifier les identifiants à votre guise.

### Exécuter le projet

Pour faciliter le démarrage de votre collaboration et éviter les problèmes de dépendance, le projet implémente `docker-compose`.

> N'hésitez pas à lancer le projet sans utiliser Docker, mais il est important de savoir que vous ne pourrez pas compter sur le soutien de la communauté. Si vous ne connaissez pas Docker, vous pouvez rapidement apprendre les bases [ici](https://docs.docker.com/get-started/).

On navigue jusqu'au répertoire où se trouve le projet :

```sh
cd ~/opus/opus-api
```

Nous exécutons la commande suivante via `npm` :

```sh
npm run start:docker
```

> Ce script exécute la commande `docker-compose up` suivante qui à son tour se nourrit du fichier `docker-compose.yml`.

Après cela, le projet devrait démarrer dans quelques secondes.

### Définition de la ressource

Vous pouvez visualiser les ressources du service en accédant à: http://localhost:5000/swagger.

## Pile de développement

### Serveur

- Node.js
  - Nest.js Framework
- Docker

### Base de données

- Postgres

## Clause de non-responsabilité

Les informations exposées via ce service proviennent de la base de données locale.

## Contributeurs

- [Enmanuel Toribio](https://github.com/eatskolnikov)
- [Hector Aristy](https://github.com/Hekotoru)
- [Jose M. Segura Polanco](https://github.com/DarkCode01)
- [Jadhiel Vélez](https://github.com/Jadhielv)
- [Marluan Espiritusanto](https://github.com/marluanespiritusanto)
