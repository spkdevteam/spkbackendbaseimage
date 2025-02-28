/**
 * @swagger
 * /demoLeaves/leaveApplicationDetailsById/{userId}/{companyId}/{clientId}:
 *   get:
 *     summary: Get details of a leave application for a specific user, company, and client
 *     description: Retrieves the details of a specific leave application for a given user, company, and client.
 *     tags:
 *       - Leave Management
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The unique identifier of the user whose leave application details are being retrieved.
 *         schema:
 *           type: string
 *           example: "67b32661425c6067035df2f7"
 *       - in: path
 *         name: companyId
 *         required: true
 *         description: The company ID associated with the leave application.
 *         schema:
 *           type: string
 *           example: "67b32661425c6067035df2f7"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the leave application.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the leave application details.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Details of the leave application"
 *               data:
 *                 userId: "67b32661425c6067035df2f7"
 *                 companyId: "67b32661425c6067035df2f7"
 *                 application: "The entire leave application will come up in here"
 *                 isApproved: "true"
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