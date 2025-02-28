/**
 * @swagger
 * /users/profile/update:
 *   put:
 *     summary: Update user profile
 *     description: Updates a user's profile information based on the provided data.
 *     tags:
 *       - User Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "67bc4ba0629cef35c6a5861a"
 *               clientId:
 *                 type: string
 *                 example: "6788abe40db7c3b61ed93c70"
 *               companyId:
 *                 type: string
 *                 example: "67b037ae038ce3ffbb097924"
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               profileImage:
 *                 type: string
 *                 example: "https://example.com/images/john_doe.jpg"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               age:
 *                 type: integer
 *                 example: 30
 *               city:
 *                 type: string
 *                 example: "Springfield"
 *               state:
 *                 type: string
 *                 example: "Illinois"
 *               country:
 *                 type: string
 *                 example: "USA"
 *               ZipCode:
 *                 type: string
 *                 example: "62701"
 *               address:
 *                 type: string
 *                 example: "1234 Elm Street, Springfield, IL"
 *               isVerified:
 *                 type: boolean
 *                 example: true
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: User profile updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User profile updated successfully"
 *       400:
 *         description: Bad request - Invalid input data.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input data"
 *       404:
 *         description: Not found - User profile not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User profile not found"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
