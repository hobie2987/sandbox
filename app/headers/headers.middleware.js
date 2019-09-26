/*global module:true, require:true*/

const router = require('express').Router(),
    helmet = require('helmet'),
    csp = require('express-csp-header/index'),
    policies = require('./csp');

/**
 * Security headers
 */
router.use(helmet());
router.use(helmet.noCache());

/**
 * Content Security Policies
 */
router.use(csp({ policies: policies }));

module.exports = router;
