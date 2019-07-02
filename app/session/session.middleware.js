/*global module:true, require:true*/

const router = require('express').Router(),
    session = require('express-session'),
    MemoryStore = require('memorystore')(session);

router.use(session({
    name: 'creative-sisters.sid',
    resave: false,
    saveUninitialized: true,
    secret: 'sandbox',
    cookie: {
        secure: process.env.HTTPS,
        maxAge: 60000 * 30, // 30 minutes
        path: '/',
        httpOnly: true
    },
    store: new MemoryStore({
        checkPeriod: 60000 * 15, // 15 minutes
    })
}));

module.exports = router;
