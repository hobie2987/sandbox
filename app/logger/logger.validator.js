/*globals module:true, require:true */
const { body } = require('express-validator');

module.exports = [
    body('log-code', 'log-code must be numeric').isNumeric(),
    body('message').optional().isString()
];
