/*globals module:true */

const Logger = function(props) {
    this._props = props || {};
};

Logger.prototype.info = function(props, code = 0) {
    this._log('info', props, code);
};

Logger.prototype.warn = function(props, code = 0) {
    this._log('warn', props, code);
};

Logger.prototype.error = function(props, code = 0) {
    this._log('error', props, code);
};

Logger.prototype._log = function(level, props, code) {
    const log = Object.assign({'log-code': code, level: level}, this._props, props);
    console[level](JSON.stringify(log));
};

module.exports = Logger;
