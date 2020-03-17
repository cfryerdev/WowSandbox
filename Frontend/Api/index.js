var express = require("express"),
    app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").load();
}

require("colors");

require("./config/express.config")(app)
    .then(require("./config/swagger.config"))
    .then(require("./config/logging.config"))
    .then(require("./config/auth.config"))
    .then(require("./config/controllers.config"))
    .then(require("./config/database.config"))
    .then(require("./config/error.config"))
    .then(() =>
        app.listen(process.env.PORT, () => {
            console.log(`>> Service is running on port ${process.env.PORT}.`);
        })
    );
