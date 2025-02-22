/**
 * @swagger
 * /designation/deleteDesignation/{id}/{clientId}:
 *   delete:
 *     summary: Delete a designation
 *     description: Deletes the specified designation based on the provided ID and client ID.
 *     tags:
 *       - Designation Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the designation to be deleted.
 *         schema:
 *           type: string
 *           example: "67b805eac722d5f018e4f688"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the designation.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Designation successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Designation deleted successfully"
 *       400:
 *         description: Validation error, invalid or missing ID/clientId.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid ID or client ID."
 *       404:
 *         description: Designation not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Designation not found."
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