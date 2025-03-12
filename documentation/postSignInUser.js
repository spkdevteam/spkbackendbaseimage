/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: User Sign-In
 *     description: Allows a user to sign in by providing their userId (email) and password. Returns a success message with user details if authenticated successfully.
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
 *                 description: User's email address
 *                 example: "ayan@yopmail.com"
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: "Ayan@1997"
 *               companyId:
 *                 type: string
 *                 description: Associated company ID
 *                 example: "67b037ae038ce3ffbb097924"
 *               clientId:
 *                 type: string
 *                 description: Associated client ID
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: User signed in successfully
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User signed in successfully"
 *               data:
 *                 _id: "67c6e3d93f79fb300133c8a5"
 *                 userName:
 *                   userId: "ayan@yopmail.com"
 *                 clientId: "6788abe40db7c3b61ed93c70"
 *                 companyId: "67b037ae038ce3ffbb097924"
 *       400:
 *         description: Validation error or missing required fields
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Required fields are missing"
 *       401:
 *         description: Unauthorized, incorrect userId or password
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid user credentials"
 *       404:
 *         description: User not found for the provided userId
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
