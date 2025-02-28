/**
 * @swagger
 * /demoHoliday/defaultHoliday:
 *   patch:
 *     summary: Set the default holiday
 *     description: Sets a holiday as the default holiday based on the provided holiday ID, default holiday name, company ID, and client ID.
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
 *               - defaultHolidayName
 *               - companyId
 *               - clientId
 *             properties:
 *               holidayId:
 *                 type: string
 *                 description: The unique identifier of the holiday to be set as default.
 *                 example: "67c04ca442adcc1853fa4646"
 *               defaultHolidayName:
 *                 type: string
 *                 description: The name of the holiday to be set as the default holiday (e.g., "Sunday").
 *                 example: "Sunday"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the holiday.
 *                 example: "67b330d40e76630289fa945d"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the holiday.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully set the default holiday.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Default holiday is set to Sunday"
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