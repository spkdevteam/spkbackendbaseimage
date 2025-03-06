/** 
 * @swagger 
 * /users/reset-password:
 *   post: 
 *     summary: Reset user password
 *     description: Resets the password for a user by providing the user ID, new password, associated client ID, and OTP for verification.
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
 *               - otp
 *             properties:
 *               id:
 *                 type: string
 *                 description: User's unique identifier
 *                 example: "67c92d61de795d44a8bf9b5e"
 *               password:
 *                 type: string
 *                 description: The new password for the user
 *                 example: "hello"
 *               clientId:
 *                 type: string
 *                 description: Associated client ID
 *                 example: "6788abe40db7c3b61ed93c70"
 *               otp:
 *                 type: string
 *                 description: One-time password for password reset verification
 *                 example: "123456"
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