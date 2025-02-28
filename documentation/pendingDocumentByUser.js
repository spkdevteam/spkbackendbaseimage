/**
 * @swagger
 * /users/pendingDocument/{clientId}/{role}:
 *   get:
 *     summary: Fetch users with pending documents by role
 *     description: Retrieves a list of users with pending document submissions, filtered by their role within a specific company.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The unique ID of the company.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: role
 *         in: path
 *         required: true
 *         description: The role of the users to fetch (e.g., Manager).
 *         schema:
 *           type: string
 *           example: "Manager"
 *       - name: page
 *         in: query
 *         required: false
 *         description: The page number for pagination.
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         required: false
 *         description: The number of users per page.
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: searchKey
 *         in: query
 *         required: false
 *         description: Search keyword for filtering users.
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Successfully fetched users with pending documents based on their role.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Users fetched by pending document based on their role"
 *               data:
 *                 - _id: "65a3b9c9e8b1a3d0a1234701"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   email: "john.doe@example.com"
 *                   phone: "1234567890"
 *                   role: "Manager"
 *                   pendingDocuments:
 *                     - documentNumber: "DOC1001"
 *                       documentType: "ID Proof"
 *                       submissionStatus: "pending"
 *                     - documentNumber: "DOC1002"
 *                       documentType: "Address Proof"
 *                       submissionStatus: "pending"
 *                 - _id: "65a3b9c9e8b1a3d0a1234702"
 *                   firstName: "Jane"
 *                   lastName: "Smith"
 *                   email: "jane.smith@example.com"
 *                   phone: "9876543210"
 *                   role: "Manager"
 *                   pendingDocuments:
 *                     - documentNumber: "DOC1003"
 *                       documentType: "Bank Statement"
 *                       submissionStatus: "pending"
 *                 - _id: "65a3b9c9e8b1a3d0a1234703"
 *                   firstName: "Alice"
 *                   lastName: "Brown"
 *                   email: "alice.brown@example.com"
 *                   phone: "5555555555"
 *                   role: "Manager"
 *                   pendingDocuments:
 *                     - documentNumber: "DOC1004"
 *                       documentType: "Work Permit"
 *                       submissionStatus: "pending"
 *                     - documentNumber: "DOC1005"
 *                       documentType: "Health Certificate"
 *                       submissionStatus: "pending"
 *                 - _id: "65a3b9c9e8b1a3d0a1234704"
 *                   firstName: "Bob"
 *                   lastName: "Wilson"
 *                   email: "bob.wilson@example.com"
 *                   phone: "4444444444"
 *                   role: "Manager"
 *                   pendingDocuments:
 *                     - documentNumber: "DOC1006"
 *                       documentType: "Tax Form"
 *                       submissionStatus: "pending"
 *                 - _id: "65a3b9c9e8b1a3d0a1234705"
 *                   firstName: "Charlie"
 *                   lastName: "Davis"
 *                   email: "charlie.davis@example.com"
 *                   phone: "6666666666"
 *                   role: "Employee"
 *                   pendingDocuments:
 *                     - documentNumber: "DOC1007"
 *                       documentType: "Insurance Policy"
 *                       submissionStatus: "pending"
 *                     - documentNumber: "DOC1008"
 *                       documentType: "Background Check"
 *                       submissionStatus: "pending"
 *               metaData:
 *                 page: 1
 *                 perPage: 5
 *                 searchKey: ""
 *                 totalData: 5
 *                 totalPages: 1
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters"
 *       404:
 *         description: Not Found - No users found for the specified role or company.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No users found for the specified role or company"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
