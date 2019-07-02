const pkg = require('../package');
const scripts = pkg.scripts;

const _scripts = {};

Object.keys(pkg.scripts).forEach(function (name) {
    _scripts[name] = {
        cmd: scripts[name]
    };
});

module.exports = _scripts;
