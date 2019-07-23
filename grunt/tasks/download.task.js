/*globals module:true, require:true */
const request = require('request');
const fs = require('fs-extra');
const path = require('path');

module.exports = function(grunt) {

    grunt.registerMultiTask('download', 'Downloads/Save file in desired location', function () {
        const done = this.async();
        const data = this.data;
        const filePath = path.join(data.dest, data.name);

        /** Ensure destnation directory exists **/
        if (!fs.existsSync(data.dest)) {
            console.log(`Creating directory: ${data.dest}`);
            fs.mkdirSync(data.dest);
        }
        console.log(`Downloading: ${data.url} to ${filePath}`);

        /** Request url and pipe response to file **/
        request.get(data.url)
            .pipe(fs.createWriteStream(filePath))
            .on('error', (err) => {
                console.error(err);
                done(false);
            })
            .on('finish', (x) => {
                console.log('Finish');
                done();
            });
    });
};
