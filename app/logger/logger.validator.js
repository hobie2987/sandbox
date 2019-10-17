/*globals module:true, require:true */
const { body, sanitizeBody } = require('express-validator');
const { CustomSanitizers } = require('../request-validator')

module.exports = [
    body('log-code', 'log-code must be numeric').isNumeric(),
    body('level').exists().isString().not().isEmpty().isIn(['info', 'error', 'warn']),
    body('message').optional().isString(),
    body('data').exists().isArray({min: 1}),
    body('data.*.name', 'name must be a non-empty string')
        .exists()
        .isString()
        .not().isEmpty()
        .bail()
        .customSanitizer(CustomSanitizers.toLowerCase),
    body('data.*.employer', 'employer must be a non-empty string')
        .exists()
        .isString()
        .not().isEmpty()
        .bail()
        .customSanitizer(CustomSanitizers.removeSpecialChars)
];
