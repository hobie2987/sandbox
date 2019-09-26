/*globals module, require */
const RetryPromise = require('../retry-promise/retry-promise');
const rp = require('request-promise');

const HttpRequest = function (url) {
    this.options = { uri: url, method: 'GET', headers: {}, json: true };
};

HttpRequest.prototype._request = function () {
    const options = this.options;
    const executor = (resolve, reject) => {

        //TODO:  Add call performance logging
        rp(options).then((response) => {
            console.error(`Success: ${options.uri}`);
            resolve(response);
        }).catch((error) => {
            console.error(`Failed: ${options.uri}`);
            reject(error);
        })
    };
    return new RetryPromise(executor).retry(3);
};

HttpRequest.prototype.get = function () {
    Object.assign(this.options, {method: 'GET'});
    return this._request();
};

HttpRequest.prototype.post = function (body) {
    Object.assign(this.options, {method: 'POST', body: body});
    return this._request();
};

module.exports = HttpRequest;
