/**
 * @swagger
 * /demoDuties/deleteDutyAndResponsibility/{id}/{companyId}/{clientId}:
 *   delete:
 *     summary: Delete a specific duty and responsibility
 *     description: This API deletes a specific duty and responsibility by its ID and the associated client ID.
 *     tags:
 *       - Duties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the duty to be deleted.
 *         schema:
 *           type: string
 *           example: "123456"
 *       - in: path
 *         name: companyId
 *         required: true
 *         description: The company ID associated with the duty.
 *         schema:
 *           type: string
 *           example: "exampleCompanyId"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the duty.
 *         schema:
 *           type: string
 *           example: "exampleClientId"
 *     responses:
 *       200:
 *         description: Duty and responsibility deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Duty deleted"
 *       400:
 *         description: Bad request. Missing or invalid parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */