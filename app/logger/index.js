/*globals module:true, require:true*/
const LoggerRoute = require('./logger.route');
const LoggerValidator = require('./logger.validator');
const LoggerMiddleware = require('./logger.middleware');

module.exports = { LoggerRoute, LoggerValidator, LoggerMiddleware };
