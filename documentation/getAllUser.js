/**
 * @swagger
 * /users/get-all/{clientId}:
 *   get:
 *     summary: Fetch All Users for a Specific Client
 *     description: Retrieves a list of all users associated with a given client ID, including their details such as email, phone, company ID, etc.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The unique ID of the client whose users are to be fetched.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: A list of users was successfully fetched.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetched all users for the client"
 *               data:
 *                 - _id: "67b083d264170f32072bef38"
 *                   displayId: "1000023"
 *                   companyId: "67b041cbe8875393e56abbdf"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *                   email: "johndoe@example.com"
 *                   phone: "+1234567890"
 *                   gender: "Male"
 *                   age: 30
 *                   city: "New York"
 *                   country: "USA"
 *                   isActive: true
 *                   createdAt: "2025-02-15T12:08:50.803Z"
 *                   updatedAt: "2025-02-15T12:08:50.803Z"
 *                 - _id: "67b41b479f6ab40c7428b7bd"
 *                   displayId: "1000024"
 *                   companyId: "67b041cbe8875393e56abbdf"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *                   email: "johndoe@example.com"
 *                   phone: "+1234567890"
 *                   gender: "Male"
 *                   age: 30
 *                   city: "New York"
 *                   country: "USA"
 *                   isActive: true
 *                   createdAt: "2025-02-18T05:31:51.844Z"
 *                   updatedAt: "2025-02-18T05:31:51.844Z"
 *       400:
 *         description: Missing Client ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Client ID is required"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
