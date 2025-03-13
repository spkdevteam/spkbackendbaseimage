/**
 * @swagger
 * /shift-register/createShift:
 *   post:
 *     summary: Create a new shift for a client
 *     description: Creates a new shift record with shift name, start time, end time, shift details, and client association.
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
 *               - companyId
 *               - clientId
 *             properties:
 *               shiftName:
 *                 type: string
 *                 description: The name of the shift (e.g., "Morning shift").
 *                 example: "Morning Shift2"
 *               shiftDetails:
 *                 type: array
 *                 description: A list of shift details associated with the shift.
 *                 items:
 *                   type: string
 *                   description: A description of a shift detail.
 *                   example: "Customer Support"
 *               startTime:
 *                 type: string
 *                 format: date-time
 *                 description: The start time of the shift in ISO 8601 format.
 *                 example: "2024-03-12T08:00:00.000Z"
 *               endTime:
 *                 type: string
 *                 format: date-time
 *                 description: The end time of the shift in ISO 8601 format.
 *                 example: "2024-03-12T16:00:00.000Z"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the shift.
 *                 example: "67b037ae038ce3ffbb097924"
 *               deletedAt:
 *                 type: string
 *                 description: The timestamp when the shift was deleted, if applicable.
 *                 example: null
 *               isActive:
 *                 type: boolean
 *                 description: Whether the shift is active or not.
 *                 example: true
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
 *               message: "Shifts created successfully"
 *               data:
 *                 _id: "67d1304b6a0c99fe0e28558d"
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
