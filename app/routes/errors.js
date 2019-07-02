/*global module:true*/

module.exports = (error, request, response) => {
    if (error.statusCode) {
        response.status(error.statusCode).send();
    } else {
        response.status(500).send('Internal Server Error');
    }
};
