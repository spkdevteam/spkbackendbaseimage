/**
 * @swagger
 * /company/editCompany:
 *   put:
 *     summary: Update an existing company
 *     description: Updates the details of an existing company using the provided company ID and relevant business details.
 *     tags:
 *       - Company
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
 *               - name
 *               - incorporationName
 *               - cinNumber
 *               - gstNumber
 *               - prefix
 *               - email
 *               - contactNumber
 *               - city
 *               - state
 *               - country
 *               - ZipCode
 *               - address
 *               - clientId
 *             properties:
 *               id:
 *                 type: string
 *                 description: Unique identifier for the company to be updated
 *                 example: "67b6fd3b47723f1361136f16"
 *               name:
 *                 type: string
 *                 description: The official name of the company
 *                 example: "Tech Innovations"
 *               incorporationName:
 *                 type: string
 *                 description: The legal incorporation name of the company
 *                 example: "Tech Innovations Private Limited"
 *               cinNumber:
 *                 type: string
 *                 description: Corporate Identification Number (CIN)
 *                 example: "U12345MH2023PTC12345"
 *               gstNumber:
 *                 type: string
 *                 description: GST registration number
 *                 example: "27ABCDE1234F1Z"
 *               prefix:
 *                 type: string
 *                 description: Company name prefix
 *                 example: "TI"
 *               Logo:
 *                 type: string
 *                 description: URL of the company logo
 *                 example: "https://example.com/logo.png"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Official company email address
 *                 example: "contact@techinnovations.com"
 *               contactNumber:
 *                 type: string
 *                 description: Company's contact number
 *                 example: "+918765432109"
 *               city:
 *                 type: string
 *                 description: City where the company is based
 *                 example: "Mumbai"
 *               state:
 *                 type: string
 *                 description: State/province where the company is based
 *                 example: "Maharashtra"
 *               country:
 *                 type: string
 *                 description: Country where the company is based
 *                 example: "India"
 *               ZipCode:
 *                 type: string
 *                 description: Company's ZIP/postal code
 *                 example: "400001"
 *               address:
 *                 type: string
 *                 description: Full address of the company
 *                 example: "123, Tech Park, Mumbai, India"
 *               clientId:
 *                 type: string
 *                 description: Associated client ID
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Company successfully updated
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Company updated successfully"
 *       400:
 *         description: Validation error or missing required fields
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Required fields are missing"
 *       404:
 *         description: Company not found
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Company not found"
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
