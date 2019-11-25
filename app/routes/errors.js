/*global module:true*/
const { Logger, LogCodes } = require('../logger');

module.exports = (error, request, response, next) => {
    const logger = request.logger || new Logger({});

    logger.error({
        message: 'Server Error',
        statusCode: error.statusCode || 'N/A',
        name: error.name,
        error: error.message,
        stacktrace: error.stack
    }, LogCodes.SERVER_ERROR);

    if (error.statusCode) {
        response.sendStatus(error.statusCode);
    } else {
        response.sendStatus(500);
    }
};
