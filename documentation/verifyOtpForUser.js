/** 
 * @swagger 
 * /users/verify-otp/:
 *   post: 
 *     summary: Verify OTP for user
 *     description: Verifies the OTP provided by the user for authentication or password recovery. If the OTP is valid, it returns a success message.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - otp
 *               - clientId
 *             properties:
 *               id:
 *                 type: string
 *                 description: User's unique identifier (can be default if not specified)
 *                 example: "67c92d61de795d44a8bf9b5e"
 *               otp:
 *                 type: string
 *                 description: One-Time Password (OTP) provided by the user for verification
 *                 example: ""
 *               clientId:
 *                 type: string
 *                 description: Associated client ID
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: OTP successfully verified
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "otp is verified"
 *               _id: "67b478c1bf3b620ce96b9ce2"
 *       400:
 *         description: Invalid or missing OTP
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid OTP or missing OTP field"
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