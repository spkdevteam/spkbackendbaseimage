/** 
 * @swagger 
 * /users/reset-password:
 *   post: 
 *     summary: Reset user password
 *     description: Resets the password for a user by providing the user ID, new password, and associated client ID. 
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - password
 *               - clientId
 *             properties:
 *               id:
 *                 type: string
 *                 description: User's unique identifier
 *                 example: "67b478c1bf3b620ce96b9ce2"
 *               password:
 *                 type: string
 *                 description: The new password for the user
 *                 example: "hello"
 *               clientId:
 *                 type: string
 *                 description: Associated client ID
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Password successfully changed
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Password has successfully changed"
 *               _id: "67b478c1bf3b620ce96b9ce2"
 *       400:
 *         description: Validation error or missing required fields
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Required fields are missing"
 *       404:
 *         description: User not found with the provided ID
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No user found with the provided ID"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */