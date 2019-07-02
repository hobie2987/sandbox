/*global module:true, require:true*/

const router = require('express').Router(),
    helmet = require('helmet'),
    csp = require('express-csp-header/index');

/**
 * Security headers
 */
router.use(helmet());
router.use(helmet.noCache());

/**
 * Content Security Policies
 */
router.use(csp({
        policies: {
            'default-src': ['\'self\''],
            'script-src': ['\'self\'', '\'unsafe-eval\'', 'https://code.jquery.com'],
            'style-src': ['\'self\'', '\'unsafe-inline\''],
            'object-src': ['\'self\''],
            'img-src': ['\'self\'', 'data:']
        }
    }
));

module.exports = router;
