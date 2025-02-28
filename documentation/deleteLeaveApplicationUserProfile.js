/**
 * @swagger
 * /users/profile/deleteLeave/{clientId}/{userId}:
 *   delete:
 *     summary: Delete an existing leave application from the user profile
 *     description: Allows a user to delete an existing leave application by specifying the client ID and user ID.
 *     tags:
 *       - User Profile
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The unique ID of the company associated with the user.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The unique ID of the user whose leave application is to be deleted.
 *         schema:
 *           type: string
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Leave application deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Leave application deleted successfully"
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid client ID or user ID."
 *       404:
 *         description: Not Found - No leave application found for the specified client ID or user ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Leave application not found"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
