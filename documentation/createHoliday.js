/**
 * @swagger
 * /demoHoliday/createHoliday:
 *   post:
 *     summary: Create a new holiday for a company
 *     description: Creates a new holiday record for a specific company with holiday name, date, and associated client.
 *     tags:
 *       - Holiday Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - companyId
 *               - holiday
 *               - holidayName
 *               - clientId
 *             properties:
 *               companyId:
 *                 type: string
 *                 description: The unique identifier of the company for which the holiday is being created.
 *                 example: "67b330d40e76630289fa945d"
 *               holiday:
 *                 type: string
 *                 description: The date of the holiday.
 *                 example: "September 10, 2025 00:00"
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
 *         description: Successfully created a new holiday record.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "New Holiday created"
 *               data:
 *                 holidayid: "67b32682425c6067035df306"
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