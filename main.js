var config = require('config');
var logger = require('./libs/log')(config.name);
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.raw({limit: 5000000}));
app.use(bodyParser.json({limit: 5000000}));
app.use(cookieParser());

var module = require('./module')(app);

app.listen(config.port);