/**
 * @swagger
 * /api/getPaginatedApi/{clientId}:
 *   get:
 *     summary: Retrieve paginated API entries
 *     description: Fetches a list of API entries with pagination and optional search functionality, based on the provided client ID.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the APIs.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: page
 *         in: query
 *         required: true
 *         description: The page number to retrieve.
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         required: true
 *         description: The number of API entries per page.
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: searchKey
 *         in: query
 *         required: false
 *         description: The search keyword to filter APIs by their name or path.
 *         schema:
 *           type: string
 *           example: "create"
 *     responses:
 *       200:
 *         description: Successfully fetched the paginated list of APIs.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched apis"
 *               data:
 *                 - _id: "67cab890e32b094449195679"
 *                   apiName: "createApi"
 *                   apiPath: "/api/createApi"
 *                   menuId: "67b6f6da8f963fae8ff8d15f"
 *                   companyId: "67b037ae038ce3ffbb097924"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   createdAt: "2025-03-07T09:12:48.213Z"
 *                   updatedAt: "2025-03-07T09:12:48.213Z"
 *                   __v: 0
 *                 - _id: "67cab9d3f24d611e8152b5e8"
 *                   apiName: "editApi"
 *                   apiPath: "/api/editApi"
 *                   menuId: "67b6f6da8f963fae8ff8d15f"
 *                   companyId: "67b037ae038ce3ffbb097924"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   createdAt: "2025-03-07T09:18:11.141Z"
 *                   updatedAt: "2025-03-07T09:18:11.141Z"
 *                   __v: 0
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 10
 *                 searchKey: ""
 *                 totalDocs: 2
 *                 totalPages: 1
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing fields."
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