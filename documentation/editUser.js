/** 
* @swagger 
* /users/edit: 
*   patch: 
*     summary: Edit an existing user's details
*     description: Updates the details of an existing user. All fields can be updated except for the user ID (`id`) and client ID (`clientId`). The `updatedAt` field will be automatically set to the current timestamp.
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
*               - id
*             properties:
*               id:
*                 type: string
*                 description: Unique user ID (cannot be updated)
*                 example: "67b82524487ffc049f1f868a"
*               firstName:
*                 type: string
*                 description: User's first name
*                 example: "Biswarup"
*               lastName:
*                 type: string
*                 description: User's last name
*                 example: "Ghosh"
*               companyId:
*                 type: string
*                 description: Associated company ID (cannot be updated)
*                 example: "67b037ae038ce3ffbb097924"
*               profileImage:
*                 type: string
*                 description: URL of user's profile image
*                 example: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
*               email:
*                 type: string
*                 format: email
*                 description: User's email address
*                 example: "biswarup@gmail.com"
*               phone:
*                 type: string
*                 description: User's phone number
*                 example: "+1234567824"
*               password:
*                 type: string
*                 description: User's password (must meet security requirements)
*                 example: "hellooo"
*               gender:
*                 type: string
*                 description: User's gender
*                 example: "Male"
*               age:
*                 type: integer
*                 description: User's age
*                 example: 20
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
*                 description: Associated client ID (cannot be updated)
*                 example: "6788abe40db7c3b61ed93c70"
*     responses:
*       200:
*         description: User successfully updated
*         content:
*           application/json:
*             example:
*               status: true
*               message: "User updated successfully"
*               data:
*                 _id: "67b82524487ffc049f1f868a"
*                 displayId: "1000061"
*                 companyId: "67b037ae038ce3ffbb097924"
*                 firstName: "Biswarup"
*                 lastName: "Ghosh"
*                 profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
*                 email: "biswarup@gmail.com"
*                 phone: "+1234567824"
*                 password: "hellooo"
*                 gender: "Male"
*                 age: 20
*                 bloodGroup: "O+"
*                 city: "New York"
*                 state: "New York"
*                 country: "USA"
*                 ZipCode: "10001"
*                 address: "123 Main Street, New York, NY 10001"
*                 otp: null
*                 isVerified: false
*                 isActive: true
*                 deletedAt: null
*                 createdAt: "2025-02-21T07:03:00.480Z"
*                 updatedAt: "2025-02-21T09:46:43.031Z"
*                 __v: 0
*       400:
*         description: Validation error or missing required fields
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Required fields are missing"
*       404:
*         description: User not found
*         content:
*           application/json:
*             example:
*               status: false
*               message: "User not found"
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