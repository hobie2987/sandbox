const createToken = require('../secret/secret');
const cookie = require('cookie');
const LogCodes = require('../logger/log-codes');

const XSRF_TOKEN = 'XSRF-TOKEN';

const createTokenCookie = (token) => {
    const options = { path: '/', httpOnly: true, overwrite: true };
    return cookie.serialize(XSRF_TOKEN, token, options);
};

module.exports = (request, response, next) => {

    const method = request.method;
    const logger = request.logger;
    const XsrfSession = request.session[XSRF_TOKEN];
    const XsrfCookie = request.cookies[XSRF_TOKEN];

    if (method !== 'GET' && (XsrfCookie !== XsrfSession)) {

        logger.warn({
            message: 'Mismatch XSRF token',
            session: XsrfSession || 'None',
            cookie: XsrfCookie
        }, LogCodes.INVALID_XSRF_TOKEN);

        response.status(403).send('Forbidden');
        return;
    }

    if (!XsrfSession) {
        const token = createToken(16).toUpperCase();
        request.session[XSRF_TOKEN] = token;
        response.setHeader('set-cookie', createTokenCookie(token));
    }

    next();
};
