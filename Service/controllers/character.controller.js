var express = require('express')
, app = express()
, authMiddleware = require('../middleware/authentication.middleware')
, manager = require('../managers/character.manager');

app.get('/character/', [authMiddleware], function (req, res) {
    manager.getCharactersByAccountId(req.session.user.id, function(data, code) {
        res.status(code).send(data);
    });
});

app.get('/character/:id', [authMiddleware], function (req, res) {
    manager.getCharacterById(req.params.id, function(data, code) {
        res.status(code).send(data);
    });
});

app.get('/character/*', [authMiddleware], function (req, res) {
    res.status(404).send('Not found.');
});

module.exports = app;