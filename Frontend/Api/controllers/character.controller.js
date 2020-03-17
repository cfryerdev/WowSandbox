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

app.post('/character/transfer', [authMiddleware], function (req, res) {
    manager.transferCharacterByIdAndRealmId(req.body.accountId, req.body.realmId, function(data, code) {
        res.status(code).send(data);
    });
});

app.get('/character/*', [authMiddleware], function (req, res) {
    res.status(404).send('Not found.');
});

/**
 * @swagger
 * tags:
 *   - name: Character
 *     description: Character endpoints
 */
module.exports = app;