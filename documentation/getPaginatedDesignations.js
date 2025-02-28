/**
 * @swagger
 * /designation/getPaginated/{clientId}:
 *   get:
 *     summary: Get paginated list of designations
 *     description: Retrieves a paginated list of designations for a specific client, with optional search and pagination parameters.
 *     tags:
 *       - Designation Management
 *     parameters:
 *       - name: clientId
 *         in: path
 *         description: The client ID for which designations are to be fetched.
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
 *         description: The number of items per page for pagination.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: searchKey
 *         in: query
 *         description: The search term to filter the designations.
 *         required: false
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Successfully fetched paginated designations.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched departments"
 *               data:
 *                 - _id: "67b80addc8af42b7fd745271"
 *                   title: "Junior developer"
 *                   shortName: "jr. dev"
 *                   displayId: "1000015"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: false
 *                   createdAt: "2025-02-21T05:10:53.129Z"
 *                   updatedAt: "2025-02-22T11:59:14.277Z"
 *                   __v: 0
 *                 - _id: "67b80ae5c8af42b7fd745275"
 *                   title: "Junior developer 1"
 *                   shortName: "jr. dev 1"
 *                   displayId: "1000016"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: false
 *                   createdAt: "2025-02-21T05:11:01.344Z"
 *                   updatedAt: "2025-02-21T07:32:14.746Z"
 *                   __v: 0
 *                 - _id: "67b967799984d2209633d0c2"
 *                   title: "Developer4"
 *                   shortName: "dev4"
 *                   displayId: "1000024"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: true
 *                   createdAt: "2025-02-22T05:58:17.833Z"
 *                   updatedAt: "2025-02-22T05:58:17.833Z"
 *                   __v: 0
 *                 - _id: "67bc0c14c5593092e5ea4dcc"
 *                   title: "Administrator"
 *                   shortName: "admin"
 *                   displayId: "1000025"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: true
 *                   createdAt: "2025-02-24T06:05:08.007Z"
 *                   updatedAt: "2025-02-24T06:05:08.007Z"
 *                   __v: 0
 *                 - _id: "67bc0c21c5593092e5ea4dd0"
 *                   title: "Accountant"
 *                   shortName: "ac"
 *                   displayId: "1000026"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: true
 *                   createdAt: "2025-02-24T06:05:21.464Z"
 *                   updatedAt: "2025-02-24T06:05:21.464Z"
 *                   __v: 0
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 5
 *                 searchKey: ""
 *                 totalDocs: 6
 *                 totalPages: 2
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid pagination parameters."
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