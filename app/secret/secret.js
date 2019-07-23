/*globals module:true, require:true */
const crypto = require('crypto');

module.exports = (size = 10) => {
    return crypto.randomBytes(size).toString('hex');
};
