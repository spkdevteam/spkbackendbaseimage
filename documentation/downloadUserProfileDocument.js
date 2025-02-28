/**
 * @swagger
 * /users/profile/downloadDocument/{clientId}/{userId}:
 *   get:
 *     summary: Download documents from a user profile
 *     description: Retrieves a list of documents associated with a user's profile, which can be downloaded.
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
 *         description: The ID of the user whose documents are to be downloaded.
 *         schema:
 *           type: string
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Successfully downloaded documents from the user's profile.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Documents downloaded successfully from user profile"
 *               data:
 *                 user:
 *                   name: "John Doe"
 *                   email: "john.doe@example.com"
 *                   profileImage: "https://example.com/images/john_doe.jpg"
 *                   createdAt: "2024-01-15T10:30:00Z"
 *                 documents:
 *                   - documentId: "doc_101"
 *                     title: "Passport"
 *                     type: "PDF"
 *                     uploadedAt: "2024-02-10T14:20:00Z"
 *                     downloadUrl: "https://example.com/documents/passport.pdf"
 *                   - documentId: "doc_102"
 *                     title: "Driving License"
 *                     type: "PDF"
 *                     uploadedAt: "2024-03-05T09:10:00Z"
 *                     downloadUrl: "https://example.com/documents/driving_license.pdf"
 *                   - documentId: "doc_103"
 *                     title: "Resume"
 *                     type: "DOCX"
 *                     uploadedAt: "2024-04-12T11:45:00Z"
 *                     downloadUrl: "https://example.com/documents/resume.docx"
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
