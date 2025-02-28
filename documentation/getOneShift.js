/**
 * @swagger
 * /demoShiftRegister/getOneShift/{shiftId}/{companyId}/{clientId}:
 *   get:
 *     summary: Get details of a specific shift for a client
 *     description: Retrieves the details of a specific shift for a client based on the provided shift ID, company ID, and client ID.
 *     tags:
 *       - Shift Register
 *     parameters:
 *       - name: shiftId
 *         in: path
 *         required: true
 *         description: The unique identifier of the shift to retrieve.
 *         schema:
 *           type: string
 *         example: "67c04ca442adcc1853fa4646"
 *       - name: companyId
 *         in: path
 *         required: true
 *         description: The company ID associated with the shift.
 *         schema:
 *           type: string
 *         example: "67c04caf42adcc1853fa464d"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the shift.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the shift details for the client.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Your shift is here."
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
 *       404:
 *         description: Shift, company, or client not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Shift not found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */