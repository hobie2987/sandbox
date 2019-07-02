/*globals module:true, require:true*/
const { validationResult } = require('express-validator');

module.exports = (request, response, next) => {
    const errors = validationResult(request);
    if(!errors.isEmpty()) {
        response.status(422).json(errors);
        return;
    }
    next();
};
