const LogCodes = require('../logger/log-codes');

module.exports = (request, response, next) => {

    const logger = request.logger;
    const start = Date.now();

    response.on('finish', () => {
        const end = Date.now();
        logger.info({
            message: 'Call performance',
            ms: (end - start),
            url: request.originalUrl,
            method: request.method
        }, LogCodes.PERFORMANCE)
    });

    next();
};
