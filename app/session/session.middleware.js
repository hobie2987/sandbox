/*global module:true, require:true*/

const router = require('express').Router(),
    PKG = require('../../package.json'),
    session = require('express-session'),
    secret = require('../secret/secret')(15);
    MemoryStore = require('memorystore')(session);

router.use(session({
    name: 'sandbox.sid',
    resave: false,
    saveUninitialized: true,
    secret: secret,
    cookie: {
        secure: process.env.HTTPS,
        maxAge: 60000 * 30, // 30 minutes
        path: `/${PKG.name}`,
        httpOnly: true
    },
    store: new MemoryStore({
        checkPeriod: 60000 * 15, // 15 minutes
    })
}));

module.exports = router;
