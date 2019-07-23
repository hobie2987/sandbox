/*global module:true, require:true*/

const router = require('express').Router();
const { LoggerRoute, LoggerValidator, LoggerMiddleware } = require('./logger');
const { RequestValidator } = require('./request-validator');

// Serve static resources
router.use(require('./routes/static-resources'));

// Initialize/Update active session
router.use(require('./session/session.middleware'));

// Add new Logger to request
router.use(LoggerMiddleware);

// Logs memory usage
router.use(require('./memory-monitor/memory-monitor.middleware'));

// POST
router.post('/log', LoggerValidator, RequestValidator, LoggerRoute);

// GET
router.get('/*', require('./routes/default'));

// Error Handling
router.use(require('./routes/404'));
router.use(require('./routes/errors'));

module.exports = router;
