/*globals module:true, require:true*/

module.exports = (request, response) => {
    const logger = request.logger,
        code = request.body['log-code'];

    logger.info(request.body, code);

    response.status(200).send('Log Success!');
};
