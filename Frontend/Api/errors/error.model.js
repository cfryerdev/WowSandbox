const ErrorType = {
    VALIDATION: 400,
    SECURITY: 401,
    PERMISSION: 403,
    SERVICE: 500
};

class HandledError extends Error {
    constructor(errorType, message, ...errs) {
        super(message);

        this.errorType = errorType;
        this.errs = errs || [];
    }
}

class HandledResponse {
    constructor(message, err, includeStack) {
        this.message = message;
        this.errors = [];

        if (err) {
            this.mapErrors(err, includeStack);
        }
    }

    static map(err, includeStack) {
        const result = {
            message: err.message,
            type: err.errorType || ErrorType.SERVICE
        };

        if (includeStack) {
            result.stack = err.stack;
        }

        return result;
    }

    mapErrors(err, includeStack) {
        this.errors.push(HandledResponse.map(err, includeStack));

        if (err.errs && err.errs.length) {
            err.errs.forEach(currentErr =>
                this.mapErrors(currentErr, includeStack)
            );
        }
    }
}

/**
 * @swagger
 * definitions:
 *   ErrorResponse:
 *     properties:
 *       message:
 *         type: string
 *       errors:
 *         type: array
 */

module.exports = { ErrorType, HandledError, HandledResponse };
