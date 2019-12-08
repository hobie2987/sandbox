/*globals module, require*/
const Busboy = require('busboy');
const LogCodes = require('../logger/log-codes');

module.exports = (request, response, next) => {

    if (!request.is('multipart/form-data')) {
        next();
        return;
    }

    request.files = request.files || {};
    const logger = request.logger;
    const busboy = new Busboy({headers: request.headers});
    request.pipe(busboy);

    busboy.on('file', function(fieldName, file, fileName, encoding, mimeType) {

        file.on('data', function(data) {
            logger.info({
                fieldName: fieldName,
                fileName: fileName,
                encoding: encoding,
                mimetype: mimeType,
                bytes: data.length
            }, LogCodes.FILE_UPLOAD);

            request.files[fileName] = data;
        });
    });

    busboy.on('finish', function() {
        next();
    });
};
