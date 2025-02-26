/**
 * @swagger
 * /demoRoles/getPaginatedRoles/{clientId}:
 *   get:
 *     summary: Get paginated roles
 *     description: Retrieves a paginated list of roles for a given client ID with an optional search key. Supports pagination through `page` and `perPage` query parameters.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the roles.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: page
 *         in: query
 *         required: false
 *         description: The page number for pagination (defaults to 1).
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         required: false
 *         description: The number of roles per page (defaults to 10).
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: searchKey
 *         in: query
 *         required: false
 *         description: A search key to filter the roles.
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Successfully retrieved paginated roles.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "All the roles are here."
 *               data:
 *                 - roleId: "67bc3c3fd0fc20776adab0b6"
 *                   rulesName: "firstRole"
 *                   designationId: "67b32661425c6067035df2f7"
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
 *                 - roleId: "67bc3c4dd0fc20776adab0ba"
 *                   rulesName: "secondRole"
 *                   designationId: "67b32661425c6067035df2f7"
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
 *                 - roleId: "67bc3c58d0fc20776adab0bc"
 *                   rulesName: "thirdRole"
 *                   designationId: "67b32661425c6067035df2f7"
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
 *               metadata:
 *                 currentPage: 1
 *                 perPage: 10
 *                 searchKey: ""
 *                 totalDocs: 20
 *                 totalPages: 2
 *       400:
 *         description: Invalid query parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid query parameters."
 *       404:
 *         description: Client not found or no roles available.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Client not found or no roles available."
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