/* globals module:true, process:true*/

const bytesToMB = (bytez) => {
    const BYTES_IN_MB = 1024 * 1024;
    return (bytez/BYTES_IN_MB).toFixed(2);
};

module.exports = (request, response, next) => {

    const logger = request.logger;

    response.on('finish', () => {
        const memory = process.memoryUsage();
        const heapTotal = bytesToMB(memory.heapTotal);
        const heapUsed = bytesToMB(memory.heapUsed);

        logger.warn({
            'message': 'Memory usage in MB',
            'resident-set': bytesToMB(memory.rss),
            'total-heap': heapTotal,
            'used-heap': heapUsed,
            'percentage': ((heapUsed/heapTotal) * 100).toFixed(2)
        });
    });

    next();
};
