module.exports = {
    server: {
        files:  [
            'server.js',
            'app/**/*',
            'src/third-party/**/*'
        ],
        tasks:  ['server'],
        options: {
            spawn: false
        }
    },
    static: {
        files:  [
            'src/**/*'
        ],
        tasks:  ['package'],
        options: {
            spawn: false
        }
    }
};
