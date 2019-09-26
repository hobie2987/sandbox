/*global module:true, require:true, __dirname:true*/

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/*', express.static(path.resolve('app/json/data'), {
    fallthrough: false,
    maxAge: '0'
}));

module.exports = router;
