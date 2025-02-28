/**
 * @swagger
 * /document/delete/{clientId}/{id}:
 *   delete:
 *     summary: Delete a document property
 *     description: Deletes a document property using the provided client ID and document ID.
 *     tags:
 *       - Document Properties
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the document property.
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The document property ID.
 *         example: "67b037ae038ce3ffbb097924"
 *     responses:
 *       200:
 *         description: Document property deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document Properties deleted successfully"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid client ID or document ID."
 *       404:
 *         description: Document property not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document Property not found."
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
