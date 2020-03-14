var express = require('express')
    , app = express()
    , manager = require('../managers/status.manager');

app.get('/status/auth', function (req, res) {
    manager.getAuthStatus(function(data, code) {
        res.status(code).send(data);
    });
});

app.get('/status/world', function (req, res) {
    manager.getWorldStatus(function(data, code) {
        res.status(code).send(data);
    });
});

app.get('/status/realms', function (req, res) {
    manager.getRealms(function(data, code) {
        res.status(code).send(data);
    });
});

app.get('/status/realms/:id', function (req, res) {
    manager.getRealmById(req.params.id, function(data, code) {
        res.status(code).send(data);
    });
});

app.get('/status/*', function (req, res) {
    res.status(404).send('Not found.');
});

module.exports = app;