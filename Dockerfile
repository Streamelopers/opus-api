###############
# Development #
###############
FROM node:lts AS development

WORKDIR /api

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

#########
# Build #
#########

FROM node:lts-alpine AS build

ENV NODE_ENV build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install && \
    npm run build

##############
# Production #
##############

FROM node:lts-alpine AS prod

RUN apk add dumb-init

ENV NODE_ENV production
ENV PORT 80

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

USER node

COPY --chown=node:node --from=build /usr/src/app/dist /usr/src/app

EXPOSE ${PORT}

CMD ["dumb-init", "node", "main.js"]
