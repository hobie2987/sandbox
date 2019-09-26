/*globals module, require*/
const Busboy = require('busboy');

module.exports = (request, response, next) => {

    request.files = request.files || {};

    if (request.method !== 'POST') {
        next();
        return;
    }

    const busboy = new Busboy({headers: request.headers});

    busboy.on('file', (fieldName, file, filename, encoding, mimetype) => {

    });

    busboy.on('finish', () => {
        next();
    });
};
