/**
 * @swagger
 * definitions:
 *   SendMailRequest:
 *     properties:
 *       sender:
 *         type: string
 *       receiver:
 *         type: string
 *       subject:
 *         type: string
 *       body:
 *         type: string
 *       money:
 *         type: string
 *       items:
 *         type: array
 */
class SendMailRequest {
    constructor() {
        this.sender = "";
        this.receiver = "";
        this.subject = "";
        this.body = "";
        this.money = 0;
        this.items = [];
    }
}
module.exports = SendMailRequest;