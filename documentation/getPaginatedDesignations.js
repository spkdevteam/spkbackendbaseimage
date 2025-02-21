/**
 * @swagger
 * /designation/getPaginatedDesignation/{clientId}:
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
 *               totalDocs: 12
 *               totalPages: 2
 *               currentPage: 1
 *               data:
 *                 - _id: "67b807174f0a977bcfeb3d38"
 *                   title: "Administrator"
 *                   shortName: "admin"
 *                   displayId: "1000012"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: false
 *                   createdAt: "2025-02-21T04:54:47.646Z"
 *                   updatedAt: "2025-02-21T04:54:47.646Z"
 *                   __v: 0
 *                 - _id: "67b80abdc8af42b7fd745266"
 *                   title: "Chartered Accountant"
 *                   shortName: "ca"
 *                   displayId: "1000013"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: false
 *                   createdAt: "2025-02-21T05:10:21.254Z"
 *                   updatedAt: "2025-02-21T05:10:21.254Z"
 *                   __v: 0
 *                 - _id: "67b80ad0c8af42b7fd74526d"
 *                   title: "Senior Developer"
 *                   shortName: "sr. dev"
 *                   displayId: "1000014"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: false
 *                   createdAt: "2025-02-21T05:10:40.267Z"
 *                   updatedAt: "2025-02-21T05:10:40.267Z"
 *                   __v: 0
 *                 - _id: "67b80addc8af42b7fd745271"
 *                   title: "Junior developer"
 *                   shortName: "jr. dev"
 *                   displayId: "1000015"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: false
 *                   createdAt: "2025-02-21T05:10:53.129Z"
 *                   updatedAt: "2025-02-21T07:19:59.176Z"
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
 *                 - _id: "67b82c4ce7f1447d7f259cef"
 *                   title: "Developer"
 *                   shortName: "dev"
 *                   displayId: "1000021"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: true
 *                   createdAt: "2025-02-21T07:33:32.230Z"
 *                   updatedAt: "2025-02-21T07:33:32.230Z"
 *                   __v: 0
 *                 - _id: "67b82c53e7f1447d7f259cf3"
 *                   title: "Developer1"
 *                   shortName: "dev1"
 *                   displayId: "1000022"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: true
 *                   createdAt: "2025-02-21T07:33:39.249Z"
 *                   updatedAt: "2025-02-21T07:33:39.249Z"
 *                   __v: 0
 *                 - _id: "67b82c5de7f1447d7f259cf7"
 *                   title: "Developer2"
 *                   shortName: "dev2"
 *                   displayId: "1000023"
 *                   createdBy: null
 *                   deletedAt: null
 *                   isActive: true
 *                   createdAt: "2025-02-21T07:33:49.480Z"
 *                   updatedAt: "2025-02-21T07:38:25.284Z"
 *                   __v: 0
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