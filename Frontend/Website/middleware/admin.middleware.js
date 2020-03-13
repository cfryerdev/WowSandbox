var express = require('express')
    , app = express();

app.use(function(req, res, next) {
    if (req.session.user && req.session.user.gmlevel === 4) {
        next();
    }
    res.status(401).send('You do not have access to this resource.');
});

module.exports = app;