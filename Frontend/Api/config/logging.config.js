var winston = require("winston"),
    morgan = require("morgan");
    

module.exports = app =>
    new Promise((resolve, reject) => {
        try {
            app.use(
                morgan((tokens, req, res) => {
                    `${tokens.method(req, res)} ${tokens.status(
                        req,
                        res
                    )} - ${tokens.url(req, res)} - ${tokens["response-time"](
                        req,
                        res
                    )}ms`;
                })
            );

            app.logger = winston.createLogger({
                level: "info",
                format: winston.format.json(),
                defaultMeta: {
                    service: "zeroslope-service"
                },
                transports: [
                    new winston.transports.Console()
                    // new winston.transports.File({
                    //     filename: './logs/zeroslope.errors.log',
                    //     level: 'error'
                    // }),
                    // new winston.transports.File({
                    //     filename: './logs/zeroslope.log'
                    // }),
                ]
            });

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
