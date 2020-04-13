var express = require("express"),
    app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").load();
}

require("colors");

var _port = process.env.PORT || 3001

require("./config/express.config")(app)
    .then(require("./config/swagger.config"))
    .then(require("./config/logging.config"))
    //.then(require("./config/auth.config"))
    .then(require("./config/controllers.config"))
    .then(require("./config/database.config"))
    .then(require("./config/error.config"))
    .then(() =>
        app.listen(_port, () => {
            console.log(`>> Service is running on port ${_port}.`);
        })
    );
