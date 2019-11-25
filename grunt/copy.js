module.exports = {
    dist: {
        files: [
            {expand: true, flatten: true, cwd: 'src', src: ['**/*.css'], dest: 'dist'},
            {expand: true, flatten: true, cwd: 'src', src: ['**/*.js'], dest: 'dist'},
            {expand: true, flatten: true, cwd: 'src', src: ['favicon.ico'], dest: 'dist'},
            {expand: true, flatten: true, cwd: 'app/json', src: ['**/*.json'], dest: 'dist/json'}
        ]
    }
};
