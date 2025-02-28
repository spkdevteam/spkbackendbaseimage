/**
 * @swagger
 * /users/profile/deleteDocument/{clientId}/{userId}:
 *   delete:
 *     summary: Delete a document from a user profile
 *     description: Deletes a specific document from a user's profile.
 *     tags:
 *       - User Profile
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the user.
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user whose document is to be deleted.
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Document deleted successfully from the user profile.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document from user profile deleted successfully"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input data"
 *       404:
 *         description: User not found or document not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found or document not found"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
