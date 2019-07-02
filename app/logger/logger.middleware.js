/*global module:true, require:true*/

const Logger = require('./logger.service.'),
    LogCodes = require('./log-codes'),
    pkg = require('../../package'),
    dateformat = require('dateformat');

module.exports = (request, response, next) => {
    const logger = new Logger({
        'app-name': pkg.name,
        version: pkg.version
    });

    logger.info({
        'request-url': request.url,
        'method': request.method,
        'session-id': request.session.id,
        'user-agent': request.headers['user-agent'],
        date: dateformat('default'),
        message: 'Request details'
    }, LogCodes.REQUEST_DETAILS);

    request.logger = logger;
    next();
};
