/**
 * @swagger
 * /document-master/delete/{clientId}/{id}:
 *   delete:
 *     summary: Delete an existing document master entry
 *     description: "Deletes the specified document master entry by its ID and associated client ID."
 *     tags:
 *       - Document Master
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: "The client ID associated with the document master."
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: id
 *         in: path
 *         required: true
 *         description: "The unique identifier of the document master."
 *         schema:
 *           type: string
 *           example: "67b9859a31301b22209ecb68"
 *     responses:
 *       200:
 *         description: "Document master successfully deleted."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document Master deleted successfully"
 *       400:
 *         description: "Invalid request or missing parameters."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters provided."
 *       401:
 *         description: "Unauthorized, missing or invalid token."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       404:
 *         description: "Document master not found."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document master not found."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
