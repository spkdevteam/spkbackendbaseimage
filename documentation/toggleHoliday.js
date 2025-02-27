/**
 * @swagger
 * /demoHoliday/toggleHoliday:
 *   patch:
 *     summary: Toggle the active status of a holiday
 *     description: Toggles the active status of a holiday based on the provided holiday ID and client ID.
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
 *               - clientId
 *             properties:
 *               holidayId:
 *                 type: string
 *                 description: The unique identifier of the holiday whose status is to be toggled.
 *                 example: "67c04ca442adcc1853fa4646"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the holiday.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully toggled the holiday status.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Holiday changed"
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