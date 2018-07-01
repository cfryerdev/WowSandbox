var express = require('express')
    , app = express();

app.use(function(req, res, next) {
    next();
});

module.exports = app;