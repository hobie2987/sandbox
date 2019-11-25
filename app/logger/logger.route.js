/*globals module:true, require:true*/

module.exports = (request, response) => {
    const logger = request.logger;
    const body = request.body;
    const code = body['log-code'];
    const level = body.level;

    logger[level](request.body, code);

    response.sendStatus(200);
};
