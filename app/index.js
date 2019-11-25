/*global module:true, require:true*/

const router = require('express').Router();

// Serve static resources (JS, CSS, & JSON)
router.use(require('./routes/static-resources'));

// Common request filters and middleware
router.use(require('./filters/filter.router'));

// RESTful Endpoints
router.use(require('./routes/endpoints.router'));

// Default GET request handler
router.get('/*', require('./routes/default'));

// Error Handling
router.use(require('./routes/404'));
router.use(require('./routes/errors'));

module.exports = router;
