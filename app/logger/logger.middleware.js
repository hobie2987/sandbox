/*global module:true, require:true*/

const Logger = require('./logger.service'),
    LogCodes = require('./log-codes'),
    pkg = require('../../package'),
    dateformat = require('dateformat');

module.exports = (request, response, next) => {
    const headers = request.headers || {},
        logger = new Logger({
            'app-name': pkg.name,
            version: pkg.version
        });

    logger.info({
        'url': request.originalUrl,
        'method': request.method,
        'session-id': request.session.id,
        'user-agent': headers['user-agent'],
        'ip-address': headers['x-forwarded-for'] || request.connection.remoteAddress,
        date: dateformat('default'),
        message: 'Request details'
    }, LogCodes.REQUEST_DETAILS);

    request.logger = logger;
    next();
};
