/**
 * @swagger
 * /company/getByCompanyId/{clientId}/{companyId}:
 *   get:
 *     summary: Get a specific company by ID for a given client
 *     description: Fetches details of a specific company based on client ID and company ID.
 *     tags:
 *       - Company
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the client
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: path
 *         name: companyId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the company to be fetched
 *         example: "67b04146e8875393e56abbd6"
 *     responses:
 *       200:
 *         description: Successfully fetched company details
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Company fetched by id"
 *               data:
 *                 _id: "67b04146e8875393e56abbd6"
 *                 displayId: "1000004"
 *                 parentCompany: null
 *                 name: "Tech Innovations Ltd"
 *                 incorporationName: "Tech Innovations Private Limited"
 *                 cinNumber: "U12345MH2023PTC123456"
 *                 gstNumber: "27ABCDE1234F1Z5"
 *                 prefix: "TI"
 *                 Logo: "https://example.com/logo.png"
 *                 email: "contact@techinnovations.com"
 *                 contactNumber: "+918765432109"
 *                 city: "Mumbai"
 *                 state: "Maharashtra"
 *                 country: "India"
 *                 ZipCode: "400001"
 *                 address: "123, Tech Park, Mumbai, India"
 *                 isActive: false
 *                 createdBy: null
 *                 deletedBy: null
 *                 deletedAt: null
 *                 createdAt: "2025-02-15T07:24:54.780Z"
 *                 updatedAt: "2025-02-15T07:24:54.780Z"
 *                 __v: 0
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters"
 *       401:
 *         description: Unauthorized, missing or invalid token
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access"
 *       404:
 *         description: Company not found
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Company not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
