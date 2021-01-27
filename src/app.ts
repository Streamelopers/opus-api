require('dotenv').config();
import express from 'express';
import logger from 'morgan';
import routes from "./routes";
import {createConnection} from 'typeorm';

if (process.env.ENVIRONMENT == 'dev'){    
    createConnection({
        type: "sqlite",
        synchronize: true,
        database: "../database.sqlite",
        entities: [`${__dirname}/framework/entities/*.ts`],
    }).then(connection => {
        console.log('Database connected');
    });
}
else {
    console.log("Need to configure db in prod");
}

// app server
const app = express();

// app config
app.use(logger(process.env.ENVIRONMENT));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(routes);

module.exports = app;
