/*global module:true, require:true*/

const router = require('express').Router(),
    LogCodes = require('../logger/log-codes'),
    path = require('path');

router.use(require('../headers/headers.middleware'));

router.use(function (request, response) {
    const baseHref = request.baseUrl;

    request.logger.info({message: 'Rendering view'}, LogCodes.RENDERING_VIEW);

    response.render('index.html', {
        layout: false,
        title: 'Sandbox',
        baseHref: baseHref,
        static: path.join(baseHref, 'pkg', 'web')
    });
});

module.exports = router;
