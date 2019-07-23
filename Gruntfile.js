/*globals module, require*/

module.exports = function(grunt) {

    // Load grunt tasks from package.json
    require('load-grunt-tasks')(grunt);

    // Register custom tasks
    grunt.loadTasks('grunt/tasks');

    // Set Grunt tasks config
    grunt.initConfig(require('./grunt'));

    // Custom tasks
    grunt.registerTask('package', ['clean', 'copy:dist', 'download']);
    grunt.registerTask('server', [ 'express:server', 'watch' ]);
    grunt.registerTask('develop', ['package', 'env:local','server']);
    grunt.registerTask('develop-secure', ['package', 'env:local-secure', 'server']);

    grunt.registerTask('build', ['package']);
};
