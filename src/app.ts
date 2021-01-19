var express = require('express');
var logger = require('morgan');
require('dotenv').config();
import {createConnection} from "typeorm";


if (process.env.ENVIRONMENT == 'dev'){    
    createConnection({
        type: "sqlite",
        database: "../database.sqlite",
        entities: [`${__dirname}/entities/**/*.js`],
    }).then(connection => {
        console.log('me conecte yeih');
    });
}
else
{
    console.log("Need to configure db in prod");
}


var usersRouter = require('./users/route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

module.exports = app;
