var express = require('express')
, app = express()
, authMiddleware = require('../middleware/authentication.middleware')
, manager = require('../managers/mail.manager');

app.post('/mail/send', function (req, res) {
    manager.login(req.body.sender, req.body.receiver, req.body.subject, req.body.body, req.body.money, req.body.items, 
        (data, code) => {
            res.status(code).send(data);
        });
});

/**
 * @swagger
 * tags:
 *   - name: Mail
 *     description: Mail endpoints
 */
module.exports = app;