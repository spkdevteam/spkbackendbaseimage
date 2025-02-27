/**
 * @swagger
 * /demoHoliday/editHoliday:
 *   patch:
 *     summary: Update an existing holiday record
 *     description: Updates an existing holiday record with a new holiday date, holiday name, and associated client.
 *     tags:
 *       - Holiday Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - holidayId
 *               - holiday
 *               - holidayName
 *               - clientId
 *             properties:
 *               holidayId:
 *                 type: string
 *                 description: The unique identifier of the holiday to be updated.
 *                 example: "67c04ca442adcc1853fa4646"
 *               holiday:
 *                 type: string
 *                 description: The new date for the holiday.
 *                 example: "12-05-2025T00:00:00.000Z"
 *               holidayName:
 *                 type: string
 *                 description: The name of the holiday.
 *                 example: "Durga Puja"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the holiday.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully updated the holiday record.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Updated the document"
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