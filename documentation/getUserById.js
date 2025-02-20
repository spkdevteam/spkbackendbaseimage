/**
 * @swagger
 * /users/getId/{clientId}/{id}:
 *   get:
 *     summary: Fetch User by ID and Client ID
 *     description: Retrieves the details of a single user by their ID and associated Client ID.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The unique ID of the client.
 *         schema:
 *           type: string
 *           default: "6788abe40db7c3b61ed93c70"
 *       - name: id
 *         in: path
 *         required: true
 *         description: The unique ID of the user to fetch.
 *         schema:
 *           type: string
 *           default: "67b6b05a1318925dce77fdea"
 *     responses:
 *       200:
 *         description: A user was successfully fetched.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetch the user by ID"
 *               data:
 *                 _id: "67b6b05a1318925dce77fdea"
 *                 displayId: "1000023"
 *                 companyId: "6788abe40db7c3b61ed93c70"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *                 email: "johndoe@example.com"
 *                 phone: "+1234567890"
 *                 gender: "Male"
 *                 age: 30
 *                 city: "New York"
 *                 country: "USA"
 *                 isActive: true
 *                 createdAt: "2025-02-15T12:08:50.803Z"
 *                 updatedAt: "2025-02-15T12:08:50.803Z"
 *       400:
 *         description: Missing Client ID or User ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Client ID and User ID are required"
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
