/**
 * @swagger
 * /demoLeaves/createLeave:
 *   post:
 *     summary: Create a leave application
 *     description: Sends a leave application for a specific user and client.
 *     tags:
 *       - Leave Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - application
 *               - leaveType
 *               - clientId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique identifier of the user submitting the leave application.
 *                 example: "67b32661425c6067035df2f7"
 *               application:
 *                 type: string
 *                 description: The content of the leave application.
 *                 example: "Hi there, this is a test leave application"
 *               leaveType:
 *                 type: string
 *                 description: The type of leave being requested (e.g., "casual", "sick").
 *                 example: "casual"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the leave application.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully submitted the leave application.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Leave application is sent"
 *       400:
 *         description: Invalid request data or missing fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing fields."
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