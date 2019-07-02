const { spawn } = require('cross-spawn');

module.exports = function(grunt) {

    grunt.registerMultiTask('exec', 'Execute command', function() {
        const done = this.async();
        const data = this.data;

        console.log(`>_ ${data.cmd}`);

        const process = spawn(data.cmd, [], { stdio: 'inherit' });
        process.on('close', (error) => {
            done(!error)
        });
    });
};
