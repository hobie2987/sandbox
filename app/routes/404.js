/*global module:true*/
const LogCodes = require('../logger/log-codes');

module.exports = function (request, response, next) {
    const error = new Error(`${request.method} ${request.originalUrl} Not found`);
    error.status = 404;
    next(error);
};
