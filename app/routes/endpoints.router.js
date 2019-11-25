const { LoggerRoute, LoggerValidator} = require('../logger');
const { RequestValidator } = require('../request-validator');

const router = require('express').Router();

/**
 * Logger endpoint for client side logs
 * Method: POST
 * Body: { log-code: number, level: string [info, error, warn], message: string }
 * Response: text/html - OK
 */
router.post('/log', LoggerValidator, RequestValidator, LoggerRoute);

module.exports = router;
