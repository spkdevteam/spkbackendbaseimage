/**
 * @swagger
 * /company/deleteCompany/{clientId}/{companyId}:
 *   delete:
 *     summary: Delete an existing company
 *     description: Deletes a company based on the provided client ID and company ID.
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
 *         description: Unique identifier for the client
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: path
 *         name: companyId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique identifier for the company to be deleted
 *         example: "67b03803038ce3ffbb097930"
 *     responses:
 *       200:
 *         description: Company successfully deleted
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Company deleted successfully"
 *               data:
 *                 _id: "67b03803038ce3ffbb097930"
 *                 displayId: "-1000003"
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
 *                 deletedAt: "2025-02-24T04:12:37.432Z"
 *                 createdAt: "2025-02-15T06:45:23.612Z"
 *                 updatedAt: "2025-02-24T04:12:37.433Z"
 *                 __v: 0
 *       400:
 *         description: Invalid request or missing parameters
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters"
 *       404:
 *         description: Company not found
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Company not found"
 *       401:
 *         description: Unauthorized access, missing or invalid token
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
