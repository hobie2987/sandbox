/*global module:true*/
const { Logger, LogCodes } = require('../logger');

module.exports = (error, request, response, next) => {
    const logger = request.logger || new Logger({});

    logger.error({
        message: error.message,
        status: error.status || 'N/A',
        name: error.name,
        stacktrace: error.stack
    }, LogCodes.SERVER_ERROR);

    response.status(error.status || 500);
    response.json({ message: error.message });
};
