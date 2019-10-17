module.exports = {
    dist: {
        files: [
            {expand: true, flatten: true, cwd: 'src', flatten: true, src: ['**/*.css'], dest: 'dist'},
            {expand: true, flatten: true, cwd: 'src', src: ['**/*.js'], dest: 'dist'},
            {expand: true, flatten: true, cwd: 'src', src: ['favicon.ico'], dest: 'dist'}
        ]
    }
};
