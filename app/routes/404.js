/*global module:true*/

module.exports = function (request, response) {
    response.status(404).send('Not Found');
};
