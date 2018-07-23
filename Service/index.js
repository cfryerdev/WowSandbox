var express = require('express')
    , app = express()
    , cors = require('cors')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , config = require('./config.json');

const port = process.env.PORT ? process.env.PORT : config.service.port;

app.use(cors({ credentials: true, origin: `http://localhost:3000` }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('trust proxy', 1)
app.use(session({
  secret: config.service.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/*', cookieParser());
app.use(require('./controllers/account.controller'));
app.use(require('./controllers/character.controller'));
app.use(require('./controllers/status.controller'));

var server = app.listen(port, function () {
    console.log(`Api:   http://localhost:${port}/`);
});