/**
 * @swagger
 * /demoHoliday/deleteHoliday/{holidayId}/{clientId}:
 *   delete:
 *     summary: Delete an existing holiday record
 *     description: Deletes an existing holiday record based on the provided holiday ID and client ID.
 *     tags:
 *       - Holiday Management
 *     parameters:
 *       - in: path
 *         name: holidayId
 *         required: true
 *         description: The unique identifier of the holiday record to be deleted.
 *         schema:
 *           type: string
 *           example: "67c04ca442adcc1853fa4646"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the holiday.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully deleted the holiday record.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Holiday deleted"
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