/**
 * @swagger
 * /demoLeaves/editApproval:
 *   patch:
 *     summary: Approve or reject a leave application
 *     description: Updates the approval status of a leave application for a specific user and client.
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
 *               - isApproved
 *               - companyId
 *               - clientId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique identifier of the user whose leave application is being approved or rejected.
 *                 example: "67b32661425c6067035df2f7"
 *               isApproved:
 *                 type: string
 *                 description: The approval status of the leave application. Should be either "true" or "false".
 *                 example: "true"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the leave application.
 *                 example: "67b32661425c6067035df2f7"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the leave application.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully updated the approval status of the leave application.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Leave application is approved"
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