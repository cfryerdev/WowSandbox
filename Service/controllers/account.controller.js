var express = require('express')
    , app = express()
    , manager = require('../managers/account.manager');

app.get('/account/:id', function (req, res) {
    manager.getAccountInfo(req.params.id, function(data) {
        res.send(data);
    });
});

app.get('/account/checkemail/:email', function (req, res) {
    manager.isExistingEmail(req.params.email, function(data) {
        res.send(data);
    });
});

app.get('/account/checkusername/:name', function (req, res) {
    manager.isExistingUsername(req.params.name, function(data) {
        res.send(data);
    });
});

app.post('/account/register', function (req, res) {
    manager.register(req.body.email, req.body.username, req.body.password, function(data) {
        res.send(data);
    });
});

module.exports = app;