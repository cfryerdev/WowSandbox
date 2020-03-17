var { ErrorType, HandledResponse } = require("../errors/error.model");

const ERROR_MESSAGE = "An error occurred. See body for details.";

const includeStack = process.env.NODE_ENV !== "production";

module.exports = app =>
    new Promise((resolve, reject) => {
        try {
            app.use((err, req, res, next) => {
                if (!err.errorType || err.errorType === ErrorType.SERVICE) {
                    console.error(err.stack.red);
                } else {
                    console.warn(err.stack.yellow);
                }

                return res
                    .status(err.errorType || ErrorType.SERVICE)
                    .send(
                        new HandledResponse(ERROR_MESSAGE, err, includeStack)
                    );
            });

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
