/*globals module*/

/**
 * Initialize a RetryPromise with a provided executor
 *
 * @param executor
 * @constructor
 */
const RetryPromise = function(executor) {
    this.executor = executor;
};

/**
 * Executes Promise only once, with no additional retries
 *
 * @returns {Promise<Promise<any>|Promise<never>>}
 */
RetryPromise.prototype.once = function() {
    return this.retry(1);
};

/**
 * Retries the Promise up to 2 times
 *
 * @returns {Promise<Promise<any>|Promise<never>>}
 */
RetryPromise.prototype.twice = function() {
    return this.retry(2);
};

/**
 * Retries the Promise up to 3 times
 *
 * @returns {Promise<Promise<any>|Promise<never>>}
 */
RetryPromise.prototype.thrice = function() {
    return this.retry(3);
};


/**
 * Retries a Promise for provided max number of attempts.
 * If the Promise resolves successfully before the max number
 * of attempts are made, the retry will be early terminated and
 * will resolve with the success value.  If the max number of
 * retries are attempted with no resolve, the retry will reject
 * with the final attempt failure reason
 *
 * @param max retries
 * @returns {Promise<Promise<any>|Promise<never>>}
 */
RetryPromise.prototype.retry = async function(max) {
    let result;

    for(let i = 0; i < max; i++) {
        let success = false;
        result = await new Promise(this.executor)
            .then((value) => { success = true; return value; })
            .catch((reason) => reason);

        // console.warn(`Attempt: ${i+1}, Success: ${success}`);

        if (success) {
            return Promise.resolve(result);
        }
    }

    return Promise.reject(result);
};

module.exports = RetryPromise;

