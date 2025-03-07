/**
 * @swagger
 * /api/deleteApi/{apiId}/{clientId}:
 *   delete:
 *     summary: Delete an existing API entry
 *     description: Deletes an API entry based on the provided API ID and client ID. Returns a success message upon successful deletion.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: apiId
 *         in: path
 *         required: true
 *         description: The ID of the API to be deleted.
 *         schema:
 *           type: string
 *           example: "67ca84ff6e1bc698a9160b95"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the API to be deleted.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: API successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "The api is deleted successfully"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing fields."
 *       404:
 *         description: API not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API not found."
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