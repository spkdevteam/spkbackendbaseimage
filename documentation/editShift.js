/**
 * @swagger
 * /demoShiftRegister/editShift:
 *   patch:
 *     summary: Edit an existing shift for a client
 *     description: Updates an existing shift record with new shift details such as shift name, start time, end time, and client association.
 *     tags:
 *       - Shift Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - shiftId
 *               - shiftName
 *               - startTime
 *               - endTime
 *               - clientId
 *             properties:
 *               shiftId:
 *                 type: string
 *                 description: The unique identifier of the shift that needs to be updated.
 *                 example: "67c04ca442adcc1853fa4646"
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
 *         description: Successfully updated the shift details for the client.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "The shift is updated"
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
 *         description: Shift not found, unable to update non-existing shift.
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