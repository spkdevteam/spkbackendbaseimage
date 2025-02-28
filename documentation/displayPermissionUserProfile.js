/**
 * @swagger
 * /users/profile/displayPermission/{clientId}/{userId}:
 *   get:
 *     summary: Display user profile permissions
 *     description: Retrieves and displays the permissions associated with a user's profile.
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
 *         description: The ID of the user whose profile permissions are to be displayed.
 *         schema:
 *           type: string
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Successfully displayed user profile permissions.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Display User Profile Permission"
 *               data:
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 profileImage: "https://example.com/images/john_doe.jpg"
 *                 role:
 *                   roleId: "67b5c5f8b16bd2ccf5927d31"
 *                   role: "Manager"
 *                   permissions:
 *                     - "create"
 *                     - "edit"
 *                     - "delete"
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters"
 *       404:
 *         description: Not Found - No user found for the specified company or user ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
