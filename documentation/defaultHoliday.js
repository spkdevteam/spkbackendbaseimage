/**
 * @swagger
 * /demoHoliday/defaultHoliday:
 *   patch:
 *     summary: Set the default holiday
 *     description: Sets a holiday as the default holiday based on the provided status and message.
 *     tags:
 *       - Holiday Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *               - message
 *             properties:
 *               status:
 *                 type: boolean
 *                 description: The status indicating whether the default holiday is set.
 *                 example: true
 *               message:
 *                 type: string
 *                 description: A message indicating the status of the operation.
 *                 example: "Default holiday is set"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully set the default holiday.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Default holiday is set"
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