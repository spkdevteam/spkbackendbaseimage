/**
 * @swagger
 * /employee/getById/{clientId}/{employeeId}:
 *   get:
 *     summary: Get Employee by ID
 *     description: "Fetches employee details using the provided clientId and employeeId."
 *     tags:
 *       - Employee
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The unique client ID associated with the employee."
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The unique ID of the employee."
 *         example: "67b976e6b1d6de1e642f009b"
 *     responses:
 *       200:
 *         description: "Fetched data of employee by ID."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetched data of employee by ID"
 *               data:
 *                 firstName: "Johnnn"
 *                 lastName: "Doe"
 *                 companyId: "12345abcde"
 *                 designationId: "67890fghij"
 *                 joiningDate: "2022-01-15"
 *                 roleId: "admin123"
 *                 documentId: "67b9859a31301b22209ecb68"
 *                 email: "john.doe@example.com"
 *                 phone: "+1234567890"
 *                 gender: "Male"
 *                 age: 30
 *                 bloodGroup: "O+"
 *                 city: "New York"
 *                 state: "New York"
 *                 country: "USA"
 *                 ZipCode: "10001"
 *                 address: "1234 Elm Street, Apt 101"
 *                 isVerified: true
 *                 isActive: true
 *                 createdAt: "2021-11-03T10:15:30Z"
 *                 updatedAt: "2023-01-10T14:45:20Z"
 *       400:
 *         description: "Invalid request or missing required fields."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data."
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
