var bodyParser = require("body-parser"),
    session = require('express-session')
    cookieParser = require("cookie-parser"),
    cors = require('cors')
    config = require('../config.json');

module.exports = app =>
    new Promise((resolve, reject) => {
        try {
            app.set("trust proxy", 1);

            app.use(bodyParser.urlencoded({ extended: false }));

            app.use(bodyParser.json());

            app.use("/*", cookieParser());

            app.use(cors());

            app.use(session({
                secret: config.service.secret,
                resave: false,
                saveUninitialized: true,
                cookie: { secure: false }
            }));
            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
