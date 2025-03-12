/**
 * @swagger
 * /users/update-by-designation:
 *   put:
 *     summary: Update user details by designation
 *     description: Updates a user's information based on their designation.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "67b6fd3b47723f1361136f16"
 *               firstName:
 *                 type: string
 *                 example: "Martinnn"
 *               lastName:
 *                 type: string
 *                 example: "Simon"
 *               companyId:
 *                 type: string
 *                 example: "67b037ae038ce3ffbb097924"
 *               profileImage:
 *                 type: string
 *                 example: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *               email:
 *                 type: string
 *                 example: "martin@gmail.com"
 *               phone:
 *                 type: string
 *                 example: "+1234567856"
 *               password:
 *                 type: string
 *                 example: "Hellooo_12332"
 *               gender:
 *                 type: string
 *                 example: "Male"
 *               age:
 *                 type: integer
 *                 example: 30
 *               bloodGroup:
 *                 type: string
 *                 example: "O+"
 *               city:
 *                 type: string
 *                 example: "New York"
 *               state:
 *                 type: string
 *                 example: "New York"
 *               country:
 *                 type: string
 *                 example: "USA"
 *               ZipCode:
 *                 type: string
 *                 example: "10001"
 *               address:
 *                 type: string
 *                 example: "123 Main Street, New York, NY 10001"
 *               isActive:
 *                 type: boolean
 *                 example: true
 *               createdBy:
 *                 type: string
 *                 example: "652c2b6f7a1c4d8e9f0b3a2c"
 *               deletedAt:
 *                 type: string
 *                 nullable: true
 *                 example: null
 *               designationId:
 *                 type: string
 *                 example: "67bfe36f432869b6ca271bf7"
 *               clientId:
 *                 type: string
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: User updated successfully by designation.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User updated successfully by designation"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input data"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
