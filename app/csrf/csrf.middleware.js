const createToken = require('../secret/secret');
const cookie = require('cookie');

const createTokenCookie = () => {
    const token = createToken(32).toUpperCase();
    const options = { path: '/', httpOnly: false, overwrite: true };
    return cookie.serialize('XSRF-TOKEN', token, options);
}

module.exports = (request, response, next) => {

    const method = request.method;
    const XsrfHeader = request.headers['X-XSRF-TOKEN'];
    const XsrfCookie = request.cookies['XSRF-TOKEN'];

    if (method === 'POST' && XsrfCookie !== XsrfHeader) {
        response.status(403).send('Forbidden');
        return;
    }

    if (!XsrfCookie) {
        response.setHeader('set-cookie', createTokenCookie());
    }

    next();
};
