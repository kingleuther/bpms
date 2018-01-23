'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var handler = require('./handlers');
var logger = require('../logger');
var receiver = require('./questetra/receiver');
var home = require('./line/get');
var login = require('./line/login');
var success = require('./line/success');
var callback = require('./line/callback');
var retrieve = require('./mongo/retrieve');
var retrieveUsers = require('./mongo/retrieveUsers');
var connection = require('./mongo/connection');
var transactionModel = require('./mongo/transactionModel');
var userModel = require('./mongo/transactionModel');
var axios = require('axios');
var querystring = require('querystring');
var winston = require('winston');
const https = require('https'); 
const line = require('@line/bot-sdk');
const config = {
  channelAccessToken: process.env.LINE_BOT_CHANNEL_TOKEN,
  channelSecret: process.env.LINE_BOT_CHANNEL_SECRET,
};
const client = new line.Client(config);
// promise default
mongoose.Promise = global.Promise;
//connection function to database

// winston logger
var logger = new (winston.Logger) ({
  // level: 'debug',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      filename: 'error.log'
    })
  ]
});
connection(mongoose);
// home listener for line
home(router);
// login 
login(router);
// success
success(router);
// receiver listener for line
receiver(router, client, logger);
// callback listener for line
callback(router, axios, querystring, mongoose);
// retrieve test data
retrieve(router, transactionModel);
// retrieve test data
retrieveUsers(logger);

module.exports = router;
