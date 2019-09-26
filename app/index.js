/*global module:true, require:true*/

const router = require('express').Router();
const { LoggerRoute, LoggerValidator, LoggerMiddleware } = require('./logger');
const { RequestValidator } = require('./request-validator');

// Serve static resources (JS and CSS)
router.use(require('./routes/static-resources'));

// CSRF
router.use(require('./csrf/csrf.middleware.js'));

// Initialize/Update active session
router.use(require('./session/session.middleware'));

// Add new Logger to request
router.use(LoggerMiddleware);

// JSON files
router.use('/json', require('./json/json.route'));

// Logs memory usage
router.use(require('./memory-monitor/memory-monitor.middleware'));

// POST
router.post('/log', LoggerValidator, RequestValidator, LoggerRoute);

// GET
router.get('/google', require('./request-proxy/request-proxy')('https://google.com/'));
router.get('/*', require('./routes/default'));

// Error Handling
router.use(require('./routes/404'));
router.use(require('./routes/errors'));

module.exports = router;
