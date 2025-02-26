/**
 * @swagger
 * /employee/update:
 *   put:
 *     summary: Update an employee's details
 *     description: "Updates the specified employee's personal and contact details."
 *     tags:
 *       - Employee
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
 *               - firstName
 *               - lastName
 *               - companyId
 *               - designationId
 *               - joiningDate
 *               - roleId
 *               - documentId
 *               - email
 *               - phone
 *               - gender
 *               - age
 *               - bloodGroup
 *               - city
 *               - state
 *               - country
 *               - ZipCode
 *               - address
 *               - isVerified
 *               - isActive
 *               - clientId
 *             properties:
 *               id:
 *                 type: string
 *                 description: "The unique ID of the employee to be updated."
 *                 example: "67b976e6b1d6de1e642f009b"
 *               firstName:
 *                 type: string
 *                 description: "The first name of the employee."
 *                 example: "Johnnn"
 *               lastName:
 *                 type: string
 *                 description: "The last name of the employee."
 *                 example: "Doe"
 *               companyId:
 *                 type: string
 *                 description: "The company ID where the employee is associated."
 *                 example: "12345abcde"
 *               designationId:
 *                 type: string
 *                 description: "The designation ID of the employee."
 *                 example: "67890fghij"
 *               joiningDate:
 *                 type: string
 *                 format: date
 *                 description: "The joining date of the employee."
 *                 example: "2022-01-15"
 *               roleId:
 *                 type: string
 *                 description: "The role ID assigned to the employee."
 *                 example: "admin123"
 *               documentId:
 *                 type: string
 *                 description: "The document ID associated with the employee."
 *                 example: "67b9859a31301b22209ecb68"
 *               email:
 *                 type: string
 *                 description: "The email address of the employee."
 *                 example: "john.doe@example.com"
 *               phone:
 *                 type: string
 *                 description: "The phone number of the employee."
 *                 example: "+1234567890"
 *               gender:
 *                 type: string
 *                 description: "The gender of the employee."
 *                 example: "Male"
 *               age:
 *                 type: integer
 *                 description: "The age of the employee."
 *                 example: 30
 *               bloodGroup:
 *                 type: string
 *                 description: "The blood group of the employee."
 *                 example: "O+"
 *               city:
 *                 type: string
 *                 description: "The city where the employee resides."
 *                 example: "New York"
 *               state:
 *                 type: string
 *                 description: "The state where the employee resides."
 *                 example: "New York"
 *               country:
 *                 type: string
 *                 description: "The country where the employee resides."
 *                 example: "USA"
 *               ZipCode:
 *                 type: string
 *                 description: "The zip code of the employee's address."
 *                 example: "10001"
 *               address:
 *                 type: string
 *                 description: "The address of the employee."
 *                 example: "1234 Elm Street, Apt 101"
 *               isVerified:
 *                 type: boolean
 *                 description: "Indicates if the employee is verified."
 *                 example: true
 *               isActive:
 *                 type: boolean
 *                 description: "Indicates if the employee is active."
 *                 example: true
 *               clientId:
 *                 type: string
 *                 description: "The client ID associated with the employee."
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: "Employee updated successfully."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Employee updated successfully"
 *       400:
 *         description: "Validation error or missing required fields."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data."
 *       401:
 *         description: "Unauthorized, missing or invalid token."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       404:
 *         description: "Employee not found."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Employee not found."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
