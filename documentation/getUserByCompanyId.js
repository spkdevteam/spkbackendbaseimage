/**
 * @swagger
 * /users/getByCompany/{clientId}/{companyId}:
 *   get:
 *     summary: Get users by company ID
 *     description: Fetch all users associated with a specific company ID.
 *     tags:
 *       - Authentication
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID
 *       - in: path
 *         name: companyId
 *         required: true
 *         schema:
 *           type: string
 *         description: The company ID
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: perPage
 *         required: false
 *         schema:
 *           type: integer
 *         description: Number of users per page
 *       - in: query
 *         name: searchKey
 *         required: false
 *         schema:
 *           type: string
 *         description: Search keyword
 *     responses:
 *       200:
 *         description: All users fetched by company ID
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "All User fetched by the companyId"
 *               data:
 *                 - _id: "65a1f9c9e8b1a3d0a1234501"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   email: "john.doe@example.com"
 *                   phone: "1234567890"
 *                   companyId: "67b0846d64170f32072bef3b"
 *                   documentNumber: "DOC12345"
 *                 - _id: "65a1f9c9e8b1a3d0a1234502"
 *                   firstName: "Jane"
 *                   lastName: "Smith"
 *                   email: "jane.smith@example.com"
 *                   phone: "9876543210"
 *                   companyId: "67b0846d64170f32072bef3b"
 *                   documentNumber: "DOC67890"
 *                 - _id: "65a1f9c9e8b1a3d0a1234503"
 *                   firstName: "Alice"
 *                   lastName: "Brown"
 *                   email: "alice.brown@example.com"
 *                   phone: "5555555555"
 *                   companyId: "67b0846d64170f32072bef3b"
 *                   documentNumber: "DOC11111"
 *               metaData:
 *                 page: 1
 *                 perPage: 5
 *                 searchKey: "DOC11111"
 *                 totalData: 5
 *                 totalPages: 1
 *       400:
 *         description: Bad request, missing parameters or validation error
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
