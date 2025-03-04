/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with personal details, contact information, and company affiliation. Updates createdBy field based on authenticated user.
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
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - companyId
 *               - clientId
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *                 example: "Ayan"
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *                 example: "admin"
 *               companyId:
 *                 type: string
 *                 description: Associated company ID
 *                 example: "67b037ae038ce3ffbb097924"
 *               profileImage:
 *                 type: string
 *                 description: URL of user's profile image
 *                 example: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *                 example: "ayan@yopmail.com"
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *                 example: "+12345678886"
 *               password:
 *                 type: string
 *                 description: User's password (must meet security requirements)
 *                 example: "Ayan@1997"
 *               gender:
 *                 type: string
 *                 description: User's gender
 *                 example: "Male"
 *               age:
 *                 type: integer
 *                 description: User's age
 *                 example: 30
 *               bloodGroup:
 *                 type: string
 *                 description: User's blood group
 *                 example: "O+"
 *               city:
 *                 type: string
 *                 description: User's city
 *                 example: "New York"
 *               state:
 *                 type: string
 *                 description: User's state/province
 *                 example: "New York"
 *               country:
 *                 type: string
 *                 description: User's country
 *                 example: "USA"
 *               ZipCode:
 *                 type: string
 *                 description: User's ZIP/postal code
 *                 example: "10001"
 *               address:
 *                 type: string
 *                 description: User's full address
 *                 example: "123 Main Street, New York, NY 10001"
 *               isActive:
 *                 type: boolean
 *                 description: User account status
 *                 example: true
 *               createdBy:
 *                 type: string
 *                 description: ID of user creating this record
 *                 example: "652c2b6f7a1c4d8e9f0b3a2c"
 *               deletedAt:
 *                 type: string
 *                 format: date-time
 *                 nullable: true
 *                 description: Soft delete timestamp
 *                 example: null
 *               clientId:
 *                 type: string
 *                 description: Associated client ID
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: User successfully created
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User created successfully"
 *               data:
 *                 _id: "67c6e3d93f79fb300133c8a5"
 *       400:
 *         description: Validation error or missing required fields
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Required fields are missing"
 *       409:
 *         description: Conflict, user already exists
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User with this email already exists"
 *       401:
 *         description: Unauthorized, missing or invalid token
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
