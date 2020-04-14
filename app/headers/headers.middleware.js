/*global module:true, require:true*/

const router = require('express').Router(),
    helmet = require('helmet'),
    directives = require('./csp'),
    nocache = require('nocache');

/**
 * Security headers
 */
router.use(helmet());
router.use(helmet.contentSecurityPolicy({directives: directives}))
router.use(nocache());

module.exports = router;
