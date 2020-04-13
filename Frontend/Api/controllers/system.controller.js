const router = require("express").Router();

/**
 * @swagger
 * 
 * /system/updateip:
 *    post:
 *      tags:
 *        - System
 *      summary: Updates the system to allow external traffic
 *      produces:
 *          - application/json
*      parameters:
 *          - name: IpRequest
 *            description: Ip Request
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/IpRequest'
 *      responses:
 *          200:
 *              description: IP Address Updated
 */
router.post("/system/updateip", (req, res) =>
    res.send({ message: "The service is operating correctly." })
);

/**
 * @swagger
 * tags:
 *   - name: System
 *     description: System functions endpoint
 */
module.exports = router;
