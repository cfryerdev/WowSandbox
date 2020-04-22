/**
 * @swagger
 * definitions:
 *   LoginResponse:
 *     properties:
 *       username:
 *         type: string
 *       token:
 *         type: string
 *       expires:
 *         type: string
 *   LoginRequest:
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */
class LoginRequest {
    constructor() {
        this.username = "";
        this.password = "";
    }
}
module.exports = LoginRequest;
