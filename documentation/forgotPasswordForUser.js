/** 
 * @swagger 
 * /users/forgot-password/:
 *   post: 
 *     summary: Initiates password recovery for a user
 *     description: Sends a password recovery email to the user if the email and client ID are valid. If the user exists, the email will be sent.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - emailId
 *               - clientId
 *             properties:
 *               emailId:
 *                 type: string
 *                 format: email
 *                 description: User's email address for password recovery
 *                 example: "johndoe@example.com"
 *               clientId:
 *                 type: string
 *                 description: Associated client ID
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Email sent successfully if user exists
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Email is sent if user exists"
 *               _id: "67b478c1bf3b620ce96b9ce2"
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input. Please check the provided details."
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No user found with the provided email."
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */