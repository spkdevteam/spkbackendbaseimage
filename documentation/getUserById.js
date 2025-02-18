/**
 * @swagger
 * /users/getUserById:
 *   get:
 *     summary: Fetch User by ID
 *     description: Retrieves the details of a single user by their ID, including their personal and contact information.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The unique ID of the user to fetch.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user was successfully fetched.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetch the user by id"
 *               data:
 *                 _id: "67b083d264170f32072bef38"
 *                 displayId: "1000023"
 *                 companyId: "67b041cbe8875393e56abbdf"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *                 email: "johndoe@example.com"
 *                 phone: "+1234567890"
 *                 password: "$2b$10$8gGnh0Auu3dR3/OuFfccIuMaFtif7kNLXC.QQH2xrdlmfi1wyAfGe"
 *                 gender: "Male"
 *                 age: 30
 *                 bloodGroup: "O+"
 *                 city: "New York"
 *                 state: "New York"
 *                 country: "USA"
 *                 ZipCode: "10001"
 *                 address: "123 Main Street, New York, NY 10001"
 *                 isActive: true
 *                 deletedAt: null
 *                 createdAt: "2025-02-15T12:08:50.803Z"
 *                 updatedAt: "2025-02-15T12:08:50.803Z"
 *                 __v: 0
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
