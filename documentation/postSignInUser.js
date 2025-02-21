/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: User Sign-In
 *     description: The email will be the userId. The compulsory fields are userId, password, clientId, and companyId.
 *     tags:
 *       - Authentication
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - password
 *               - companyId
 *               - clientId
 *             properties:
 *               userId:
 *                 type: string
 *                 format: email
 *                 description: The user's email address used as an identifier.
 *                 example: "biswarup@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password.
 *                 example: "hellooo"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the user.
 *                 example: "67b037ae038ce3ffbb097924"
 *               clientId:
 *                 type: string
 *                 description: The client ID for authentication.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: User signed in successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User signed in successfully."
 *               data:
 *                 _id: "67b6b05a1318925dce77fdea"
 *                 userId: "biswarup@gmail.com"
 *                 clientId: "6788abe40db7c3b61ed93c70"
 *                 companyId: "67b037ae038ce3ffbb097924"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "userId, password, companyId, or clientId is missing."
 *       401:
 *         description: Unauthorized, invalid credentials.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid userId or password."
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
