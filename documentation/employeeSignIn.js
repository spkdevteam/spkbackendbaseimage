/**
 * @swagger
 * /employee/signin:
 *   post:
 *     summary: Employee Sign In
 *     description: "Authenticates an employee with the provided credentials (employeeId and password)."
 *     tags:
 *       - Employee
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - employeeId
 *               - password
 *               - companyId
 *               - clientId
 *             properties:
 *               employeeId:
 *                 type: string
 *                 description: "The unique email ID of the employee for sign-in."
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 description: "The password associated with the employee's account."
 *                 example: "SecurePassword123!"
 *               companyId:
 *                 type: string
 *                 description: "The company ID the employee belongs to."
 *                 example: "12345abcde"
 *               clientId:
 *                 type: string
 *                 description: "The client ID associated with the employee."
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: "Employee signed in successfully."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Employee signed in successfully"
 *               data:
 *                 _id: "67b976e6b1d6de1e642f009b"
 *                 employeeId: "john.doe@example.com"
 *       400:
 *         description: "Invalid request or missing required fields."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data."
 *       401:
 *         description: "Unauthorized, invalid credentials."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid employee ID or password."
 *       404:
 *         description: "Employee not found."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Employee not found."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
