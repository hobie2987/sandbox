module.exports = {
    'local': {
      deployment: 'local'
    },
    'local-secure': {
        deployment: 'local',
        vars: {
            HTTPS: true
        }
    }
};
