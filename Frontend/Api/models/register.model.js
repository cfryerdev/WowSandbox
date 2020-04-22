/**
 * @swagger
 * definitions:
 *   RegisterRequest:
 *     properties:
 *       email:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 */
class RegisterRequest {
    constructor() {
        this.username = "";
        this.password = "";
    }
}
module.exports = RegisterRequest;
