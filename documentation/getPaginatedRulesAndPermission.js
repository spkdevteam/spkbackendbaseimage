/**
 * @swagger
 * /rules/getRulesAndPermissionPaginated/{clientId}:
 *   get:
 *     summary: Get paginated list of rules and permissions
 *     description: Fetches a paginated list of rules and their associated permissions for a specific client, with optional search functionality.
 *     tags:
 *       - Rules Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         description: The client ID for which the rules are being fetched.
 *         required: true
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: page
 *         in: query
 *         description: The page number for pagination.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         description: The number of rules to display per page.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 5
 *       - name: searchKey
 *         in: query
 *         description: A search keyword to filter rules by name.
 *         required: false
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Successfully fetched rules.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched rules."
 *               data:
 *                 - _id: "67bc3c3fd0fc20776adab0b6"
 *                   rulesName: "firstRule"
 *                   apiId: "67b32661425c6067035df2f7"
 *                   departmentId: "67b32661425c6067035df2f7"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:30:39.657Z"
 *                   updatedAt: "2025-02-24T10:28:52.398Z"
 *                   __v: 0
 *                 - _id: "67bc3c4dd0fc20776adab0ba"
 *                   rulesName: "secondRule"
 *                   apiId: "67b32661425c6067035df2f7"
 *                   departmentId: "67b32661425c6067035df2f7"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:30:53.500Z"
 *                   updatedAt: "2025-02-24T09:30:53.500Z"
 *                   __v: 0
 *                 - _id: "67bc3c58d0fc20776adab0bc"
 *                   rulesName: "thirdRule"
 *                   apiId: "67b32661425c6067035df2f7"
 *                   departmentId: "67b32661425c6067035df2f7"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:31:04.896Z"
 *                   updatedAt: "2025-02-24T09:31:04.896Z"
 *                   __v: 0
 *                 # Additional rules follow the same structure
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 5
 *                 searchKey: ""
 *                 totalDocs: 7
 *                 totalPages: 2
 *       400:
 *         description: Invalid or missing parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing required fields."
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       404:
 *         description: No rules found for the given client.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No rules found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */