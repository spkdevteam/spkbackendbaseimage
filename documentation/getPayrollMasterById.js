/**
 * @swagger
 * /demoPayroll/getPayrollById/{payrollId}/{companyId}/{clientId}:
 *   get:
 *     summary: Retrieve payroll details by payroll ID, company ID, and client ID
 *     description: Retrieves the payroll information for a specific employee using their payroll ID, company ID, and client ID.
 *     tags:
 *       - Payroll Master
 *     parameters:
 *       - in: path
 *         name: payrollId
 *         required: true
 *         description: The unique identifier of the payroll record.
 *         schema:
 *           type: string
 *           example: "67b32661425c6067035df2f7"
 *       - in: path
 *         name: companyId
 *         required: true
 *         description: The company ID associated with the payroll.
 *         schema:
 *           type: string
 *           example: "67b32661425c6067035df2f7"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the payroll.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the payroll details.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "The payroll is"
 *               data:
 *                 payrollId: "67b32661425c6067035df2f7"
 *                 companyId: "67b32661425c6067035df2f7"
 *                 userId: "67b3266d425c6067035df2fd"
 *                 salary: 12000
 *                 tax: 0
 *       400:
 *         description: Invalid request data or missing parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing parameters."
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */