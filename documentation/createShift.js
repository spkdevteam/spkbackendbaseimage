/**
 * @swagger
 * /demoShiftRegister/createShift:
 *   post:
 *     summary: Create a new shift for a client
 *     description: Creates a new shift record with shift name, start time, end time, and client association.
 *     tags:
 *       - Shift Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - shiftName
 *               - startTime
 *               - endTime
 *               - clientId
 *             properties:
 *               shiftName:
 *                 type: string
 *                 description: The name of the shift (e.g., "Morning shift").
 *                 example: "Morning shift"
 *               startTime:
 *                 type: string
 *                 description: The start time of the shift.
 *                 example: "9:30:00 AM"
 *               endTime:
 *                 type: string
 *                 description: The end time of the shift.
 *                 example: "6:30:00 PM"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the shift.
 *                 example: "67c04caf42adcc1853fa464d"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the shift.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully created a new shift record for the client.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Your shift is created"
 *               data:
 *                 shiftId: "67c04ca442adcc1853fa4646"
 *                 companyId: "67c04caf42adcc1853fa464d"
 *                 shiftName: "Morning shift"
 *                 startTime: "9:30:00 AM"
 *                 endTime: "6:30:00 PM"
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