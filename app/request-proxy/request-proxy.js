/*globals module:true, require:true*/
const rp = require('request-promise');

module.exports = (url) => {

    return (request, response) => {
        const method = request.method;
        let statusCode, body;

        rp({
            uri: url,
            method: method,
            body: method === 'POST' ? request.body : undefined,
            resolveWithFullResponse: true
        }).then((resp) => {
            statusCode = resp.statusCode || 200;
            body = resp.body;
        }).catch((error) => {
            const isStatusCodeError = error.name === 'StatusCodeError';
            statusCode = isStatusCodeError ? error.statusCode : 404;
            body = isStatusCodeError ? error.error : 'Not found';
        }).finally(() => {
            response.status(statusCode).send(body);
        });
    };
};
