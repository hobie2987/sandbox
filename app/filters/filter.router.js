const router = require('express').Router();

/**
 * Generates a unique sessions for each user. Generates
 * a session cookie which is used to populate the session
 * on each request.  The active session can be accessed by
 * the following: request.session
 */
router.use(require('../session/session.middleware'));

/**
 * Attaches a logger instance to each request to be
 * utilized within other middleware. The instance
 * can be accessed by the following: request.logger
 */
router.use(require('../logger/logger.middleware'));

/**
 * Generate logs containing call performance in milliseconds
 */
router.use(require('../performance/performance.middleware.js'));

/**
 * Generates info logs containing statistics of the
 * current application memory usage.
 */
router.use(require('../memory-monitor/memory-monitor.middleware'));

/**
 * Validates the XSRF-TOKEN cookie matches the token
 * saved on the users session (excluding GET requests).
 * If no token exists on session, one is created and
 * updated on the users session and set on the XSRF-TOKEN
 * cookie.
 */
router.use(require('../csrf/csrf.middleware.js'));

/**
 * Parses the files submitted to the server and places
 * them on: request.files
 */
router.post('/*', require('../file-upload/file-upload.middleware.js'));

/**
 * Add CSP and no-cache headers to GET requests
 */
router.get('/*', require('../headers/headers.middleware'));

module.exports = router;
