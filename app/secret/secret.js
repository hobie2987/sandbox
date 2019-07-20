/*globals module:true, require:true */
const crypto = require('crypto');

module.exports = () => {
    const buffer = crypto.randomBytes(15);
    return buffer.toString('hex');
};
