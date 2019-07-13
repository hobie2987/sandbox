/*global require:true, __dirname: true*/

const express = require('./app/express-server/server'),
    handlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    pkg = require('./package'),
    app = express(),
    port = process.env.PORT || 8080,
    root = `${app.mountpath}${pkg.name}`

// Server configuration
app.set('port', port);
app.engine('html', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'html');
app.set('views','./app/views');
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(require('cookie-parser')());
app.use(require('compression')());
app.use(require('cors')());

// Application
app.use(root, require('./app'));

// Start server on dedicated port
app.listen(port, function() {
    const protocol = process.env.HTTPS ? 'https' : 'http';
    console.log(`Express Server Started @: ${protocol}://localhost:${port}${root}`);
});
