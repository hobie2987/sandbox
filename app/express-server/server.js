/*globals module, require*/

const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

module.exports = function() {

    const app = express();
    const secure = process.env.HTTPS;

    app.listen = function () {
        const server = secure ? https.createServer({
            key: fs.readFileSync('app/express-server/private.key'),
            cert: fs.readFileSync('app/express-server/primary.cert')
        }, app) : http.createServer(app);

        server.listen.apply(server, arguments);
    };

    return app;
};
