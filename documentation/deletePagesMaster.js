/**
 * @swagger
 * /pagesMaster/deletePageMaster/{pageId}/{clientId}:
 *   delete:
 *     summary: Delete a page master entry
 *     description: Deletes an existing page master entry based on the provided page ID and client ID.
 *     tags:
 *       - Pages Master Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: pageId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the page to be deleted.
 *         example: "67d115a6f06ab3feef7688ca"
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the page.
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Page master entry successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Page deleted successfully"
 *       400:
 *         description: Invalid parameters or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing data."
 *       404:
 *         description: Not found, page master entry does not exist.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Page master entry not found."
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