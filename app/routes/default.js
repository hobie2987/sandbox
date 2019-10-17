/*global module:true, require:true*/

const router = require('express').Router(),
    LogCodes = require('../logger/log-codes');

router.use(require('../headers/headers.middleware'));

router.use(function (request, response) {
    const baseHref = request.baseUrl;

    request.logger.info({message: 'Rendering view'}, LogCodes.RENDERING_VIEW);

    response.render('index.html', {
        layout: false,
        title: 'Sandbox',
        baseHref: baseHref,
        static: [baseHref, 'pkg', 'web'].join('/')
    });
});

module.exports = router;
