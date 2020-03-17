const router = require("express").Router();

/**
 * @swagger
 * 
 * /health:
 *    get:
 *      tags:
 *        - Health
 *      summary: Determines if the service is in a healthy state
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: The service is in a healthy state
 */
router.get("/health/", (req, res) =>
    res.send({ message: "The service is operating correctly." })
);

/**
 * @swagger
 * tags:
 *   - name: Health
 *     description: Health check endpoint
 */
module.exports = router;
