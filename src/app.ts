var express = require('express');
var logger = require('morgan');
import {createConnection} from "typeorm";

createConnection({
    type: "sqlite",
    database: "../database.sqlite",
    entities: [`${__dirname}/entities/**/*.js`],
}).then(connection => {
    console.log('me conecte yeih');
});



var usersRouter = require('./users/route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

module.exports = app;
