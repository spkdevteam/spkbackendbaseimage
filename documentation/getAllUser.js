/**
 * @swagger
 * /users:
 *   get:
 *     summary: Fetch All Users
 *     description: Retrieves a list of all users in the system, including their details such as email, phone, company ID, etc.
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: A list of users was successfully fetched.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetched all user"
 *               data:
 *                 - _id: "67b083d264170f32072bef38"
 *                   displayId: "1000023"
 *                   companyId: "67b041cbe8875393e56abbdf"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *                   email: "johndoe@example.com"
 *                   phone: "+1234567890"
 *                   password: "$2b$10$8gGnh0Auu3dR3/OuFfccIuMaFtif7kNLXC.QQH2xrdlmfi1wyAfGe"
 *                   gender: "Male"
 *                   age: 30
 *                   bloodGroup: "O+"
 *                   city: "New York"
 *                   state: "New York"
 *                   country: "USA"
 *                   ZipCode: "10001"
 *                   address: "123 Main Street, New York, NY 10001"
 *                   isActive: true
 *                   deletedAt: null
 *                   createdAt: "2025-02-15T12:08:50.803Z"
 *                   updatedAt: "2025-02-15T12:08:50.803Z"
 *                   __v: 0
 *                 - _id: "67b41b479f6ab40c7428b7bd"
 *                   displayId: "1000024"
 *                   companyId: "67b041cbe8875393e56abbdf"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *                   email: "johndoe@example.com"
 *                   phone: "+1234567890"
 *                   password: "$2b$10$CgJeXD3VtDg8B7GACuSU7uIw3fTBnO601r9HkfUVNAv0SAQI0EOzm"
 *                   gender: "Male"
 *                   age: 30
 *                   bloodGroup: "O+"
 *                   city: "New York"
 *                   state: "New York"
 *                   country: "USA"
 *                   ZipCode: "10001"
 *                   address: "123 Main Street, New York, NY 10001"
 *                   isActive: true
 *                   deletedAt: null
 *                   createdAt: "2025-02-18T05:31:51.844Z"
 *                   updatedAt: "2025-02-18T05:31:51.844Z"
 *                   __v: 0
 *                 # Similar user entries for other users...
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
