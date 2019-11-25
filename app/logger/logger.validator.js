/*globals module:true, require:true */
const { body } = require('express-validator');

module.exports = [
    body('log-code', 'log-code must be numeric').isNumeric().toInt(),
    body('level').isString().isIn(['info', 'error', 'warn']),
    body('message').optional().isString()
];
