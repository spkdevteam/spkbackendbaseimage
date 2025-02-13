/**
 * @swagger
 * /Api/deleteApi:
 *   delete:
 *     summary: Delete an API entry
 *     description: Finds the record with the given `clientId` and `apiId`. If the `deletedAt` field exists, it updates it with the current timestamp. Otherwise, it returns an error message stating no record exists.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the API.
 *         example: "client12345"
 *       - in: query
 *         name: apiId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the API to be deleted.
 *         example: "api67890"
 *     responses:
 *       200:
 *         description: API successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "API deleted successfully."
 *       404:
 *         description: API not found or already deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No record exists for the provided API ID."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while deleting the API."
 */
