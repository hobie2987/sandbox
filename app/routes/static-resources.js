/*global module:true, require:true, __dirname:true*/

var express = require('express'),
    router = express.Router(),
    path = require('path'),
    STATIC_PATH = '/pkg/web';

router.use(STATIC_PATH, express.static(path.resolve('dist'), {
    fallthrough: false,
    maxAge: '0'
}));

module.exports = router;
