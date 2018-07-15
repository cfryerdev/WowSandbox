var express = require('express')
    , app = express();

app.use(function(req, res, next) {
    if (req.session.user === undefined || req.session.user == null) {
        res.status(403).send('You need to be logged in to access this resource.');
    }
    next();
});

module.exports = app;