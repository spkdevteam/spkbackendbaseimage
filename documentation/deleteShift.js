/**
 * @swagger
 * /demoShiftRegister/deleteShift/{shiftId}/{companyId}/{clientId}:
 *   delete:
 *     summary: Delete an existing shift for a client
 *     description: Deletes an existing shift record for the client based on the provided shift ID, company ID, and client ID.
 *     tags:
 *       - Shift Register
 *     parameters:
 *       - name: shiftId
 *         in: path
 *         required: true
 *         description: The unique identifier of the shift to be deleted.
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
 *         description: Successfully deleted the shift for the client.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "The shift is deleted."
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
 *         description: Shift not found or client ID does not match the shift.
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