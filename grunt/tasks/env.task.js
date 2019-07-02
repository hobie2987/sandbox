const _ = require('lodash');
const pkg = require('../../package');

module.exports = function(grunt) {

    grunt.registerMultiTask('env', 'Set properties on process.env', function() {
        const data = this.data;
        const region = data.deployment;
        const deployments = pkg.deployment || {};
        const vars = {};

        if (deployments.hasOwnProperty(region)) {
            Object.assign(vars, deployments[region]);
        }

        Object.assign(vars, data.vars);

        console.log('Setting environmental variables:');
        console.log(JSON.stringify(vars, null, 2));

        _.extend(process.env, vars)
    });
};
