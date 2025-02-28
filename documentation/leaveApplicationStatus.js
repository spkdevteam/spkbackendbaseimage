/**
 * @swagger
 * /demoLeaves/leaveApplicationStatus/{userId}/{companyId}/{status}/{clientId}:
 *   get:
 *     summary: Get the status of a leave application for a specific user and client
 *     description: Retrieves the current status of a specific leave application for a given user and client.
 *     tags:
 *       - Leave Management
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The unique identifier of the user whose leave application status is being retrieved.
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
 *         name: status
 *         required: true
 *         description: The current status of the leave application (e.g., "pending", "approved").
 *         schema:
 *           type: string
 *           example: "approved"
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
 *         description: Successfully retrieved the status of the leave application.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Status of leave application"
 *               data: "Status, changed to approved"
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