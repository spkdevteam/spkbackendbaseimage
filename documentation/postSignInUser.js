/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: User Sign-In
 *     description: Authenticates a user using email, phone, password, and company ID. Returns an access token upon successful login.
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
 *               - email
 *               - phone
 *               - password
 *               - companyId
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address.
 *                 example: "johndoe@example.com"
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *                 example: "+1234567890"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password.
 *                 example: "John@123"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the user.
 *                 example: "67b041cbe8875393e56abbdf"
 *     responses:
 *       200:
 *         description: User signed in successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User signed in successfully."
 *               data:
 *                 email: "johndoe@example.com"
 *                 phone: "+1234567890"
 *                 companyId: "67b041cbe8875393e56abbdf"
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2IwODNkMjY0MTcwZjMyMDcyYmVmMzgiLCJpYXQiOjE3Mzk4NjMzNzYsImV4cCI6MTc0MDQ2ODE3Nn0.sJBfodYvuiCHzeqAfJN06LXuA_4FfW5m3mLUHbesPaY"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Email, phone, password, or companyId is missing."
 *       401:
 *         description: Unauthorized, invalid credentials.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid email or password."
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
