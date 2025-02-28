/**
 * @swagger
 * /users/profile/getDocument/{clientId}/{userId}:
 *   get:
 *     summary: Get user profile documents
 *     description: Fetches the documents associated with a user's profile based on the provided userId.
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
 *         description: The ID of the user whose documents are being fetched.
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Documents fetched successfully from user profile.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Documents fetched in user profile"
 *               data:
 *                 userId: "65a3b9c9e8b1a3d0a1234701"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "john.doe@example.com"
 *                 phone: "1234567890"
 *                 role: "Manager"
 *                 Documents:
 *                   - documentNumber: "DOC1001"
 *                     documentType: "ID Proof"
 *                   - documentNumber: "DOC1002"
 *                     documentType: "Address Proof"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input data"
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
