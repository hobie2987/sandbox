/*globals module:true, require:true*/

module.exports = (request, response) => {
    const logger = request.logger;
    const body = request.body;
    const code = body['log-code'];
    const level = body.level;

    console.log(request.body);

    logger[level](request.body, code);

    response.status(200).send('Log Success!');
};
