/*global module:true*/
const LogCodes = require('../logger/log-codes');

module.exports = function (request, response) {
    const logger = request.logger;

    logger.warn({
        message: '404: Not Found',
        url: request.originalUrl,
        method: request.method,
        headers: request.headers
    }, LogCodes.NOT_FOUND);

    response.status(404).send('Not Found');
};
