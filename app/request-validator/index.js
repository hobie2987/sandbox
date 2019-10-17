/*globals module:true, require:true*/
const RequestValidator = require('./request-validator.middleware');
const CustomSanitizers = require('./custom-santizers');

module.exports = { RequestValidator, CustomSanitizers };
