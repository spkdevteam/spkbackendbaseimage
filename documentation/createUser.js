/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with personal details, contact information, and company affiliation. Updates the `createdBy` field based on the authenticated user.
 *     tags:
 *       - Authentication
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - displayId
 *               - companyId
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - gender
 *               - bloodGroup
 *               - address
 *               - clientId
 *             properties:
 *               displayId:
 *                 type: string
 *                 description: Unique ID for the user.
 *                 example: "10000"
 *               companyId:
 *                 type: string
 *                 description: Associated company ID.
 *                 example: "67b041cbe8875393e56abbdf"
 *               firstName:
 *                 type: string
 *                 description: User's first name.
 *                 example: "Ayan"
 *               lastName:
 *                 type: string
 *                 description: User's last name.
 *                 example: "Admin"
 *               profileImage:
 *                 type: string
 *                 description: URL of the user's profile image.
 *                 example: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address.
 *                 example: "ayan@yopmail.com"
 *               phone:
 *                 type: string
 *                 description: User's phone number.
 *                 example: "+12345678000"
 *               password:
 *                 type: string
 *                 description: User's password (must meet security requirements).
 *                 example: "Ayan@123"
 *               gender:
 *                 type: string
 *                 description: User's gender.
 *                 example: "Male"
 *               bloodGroup:
 *                 type: string
 *                 description: User's blood group.
 *                 example: "O+"
 *               address:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     city:
 *                       type: string
 *                       description: City of the user.
 *                       example: "New York"
 *                     state:
 *                       type: string
 *                       description: State of the user.
 *                       example: "New York"
 *                     country:
 *                       type: string
 *                       description: Country of the user.
 *                       example: "USA"
 *                     ZipCode:
 *                       type: string
 *                       description: ZIP code of the user's address.
 *                       example: "10001"
 *               documents:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: List of user documents.
 *                   example: ["document1.pdf", "document2.pdf"]
 *               leaveDetails:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Leave details for the user.
 *                   example: ["Sick leave for 2 days", "Vacation leave from 1st March to 5th March"]
 *               designation:
 *                 type: string
 *                 description: Designation ID of the user.
 *                 example: "67b6f6da8f963fae8ff8d15f"
 *               department:
 *                 type: string
 *                 description: Department ID of the user.
 *                 example: "67b6f6da8f963fae8ff8d15f"
 *               family:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: List of family members.
 *                   example: ["Jane Doe (Spouse)", "Tom Doe (Son)"]
 *               loginOptions:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: Email for login.
 *                     example: "testUser@gmail.com"
 *                   phone:
 *                     type: string
 *                     description: Phone number for login.
 *                     example: "987894914422"
 *                   userId:
 *                     type: string
 *                     description: User's unique ID for login.
 *                     example: "testusers14545"
 *               maritalStatus:
 *                 type: string
 *                 description: User's marital status.
 *                 example: "Married"
 *               dateOfBirth:
 *                 type: string
 *                 format: date-time
 *                 description: User's date of birth.
 *                 example: "1985-05-15T00:00:00.000Z"
 *               clientId:
 *                 type: string
 *                 description: Associated client ID.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: User successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User created successfully"
 *               data:
 *                 _id: "67d268416e9841c0736013e7"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Required fields are missing"
 *       409:
 *         description: Conflict, user already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User with this email already exists"
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
