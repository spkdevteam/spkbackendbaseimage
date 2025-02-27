/**
 * @swagger
 * /demoPayroll/getPaginatedpayroll/{clientId}:
 *   get:
 *     summary: Retrieve paginated payrolls for a client with optional search filter
 *     description: Retrieves a paginated list of payroll records for a specific client, with an optional search filter for specific payrolls.
 *     tags:
 *       - Payroll Management
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID for which the payroll records are being retrieved.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - in: query
 *         name: page
 *         required: false
 *         description: The page number for pagination (default is 1).
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: perPage
 *         required: false
 *         description: The number of records to return per page (default is 10).
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: searchKey
 *         required: false
 *         description: A search key to filter the payroll records based on specific criteria (optional).
 *         schema:
 *           type: string
 *           example: ""
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the paginated payroll records.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched the payrolls"
 *               data:
 *                 - payrollId: "67bc3c3fd0fc20776adab0b6"
 *                   userId: "67b3266d425c6067035df2fd"
 *                   salary: 12000
 *                   tax: 0
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:30:39.657Z"
 *                   updatedAt: "2025-02-24T10:28:52.398Z"
 *                   __v: 0
 *                 - payrollId: "67bc3c4dd0fc20776adab0ba"
 *                   userId: "67b3266d425c6067035df2fd"
 *                   salary: 12000
 *                   tax: 0
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:30:53.500Z"
 *                   updatedAt: "2025-02-24T09:30:53.500Z"
 *                   __v: 0
 *                 - payrollId: "67bc3c58d0fc20776adab0bc"
 *                   userId: "67b3266d425c6067035df2fd"
 *                   salary: 12000
 *                   tax: 0
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:31:04.896Z"
 *                   updatedAt: "2025-02-24T09:31:04.896Z"
 *                   __v: 0
 *               metadata:
 *                 currentPage: 1
 *                 perPage: 10
 *                 searchKey: ""
 *                 totalDocs: 20
 *                 totalPages: 2
 *       400:
 *         description: Invalid request data or missing parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing parameters."
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */