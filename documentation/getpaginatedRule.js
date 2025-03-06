/**
 * @swagger
 * /rules/getPaginatedRules/{clientId}:
 *   get:
 *     summary: Get Paginated Rules
 *     description: Fetches a list of rules for a specific client, with pagination and an optional search key.
 *     tags:
 *       - Rule Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the rules.
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: query
 *         name: page
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: The page number to fetch.
 *       - in: query
 *         name: perPage
 *         required: true
 *         schema:
 *           type: integer
 *           example: 5
 *         description: The number of rules to fetch per page.
 *       - in: query
 *         name: searchKey
 *         required: false
 *         schema:
 *           type: string
 *           example: ""
 *         description: Optional search key to filter rules by name or other criteria.
 *     responses:
 *       200:
 *         description: Successfully fetched the paginated list of rules.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched rules"
 *               data:
 *                 - _id: "67c83eddb7b9a86a3e1ab5d8"
 *                   ruleName: "spk_rule"
 *                   apiId: "67c821d02d587653996ba828"
 *                   menuId: "67c821d02d587653996ba828"
 *                   companyId: "67c821d02d587653996ba828"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67c821d02d587653996ba828"
 *                   editedBy: "67c821d02d587653996ba828"
 *                   isActive: true
 *                   oldId: null
 *                   createdAt: "2025-03-05T12:09:01.390Z"
 *                   updatedAt: "2025-03-05T12:17:40.892Z"
 *                   __v: 0
 *                 - _id: "67c987b1e7e4aa5a041f282a"
 *                   ruleName: "spk_rule"
 *                   apiId: "67c821d02d587653996ba828"
 *                   menuId: "67c821d02d587653996ba828"
 *                   companyId: "67c821d02d587653996ba838"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   editedBy: "67c944517f8fcf7d12e92f1d"
 *                   isActive: true
 *                   oldId: null
 *                   createdAt: "2025-03-06T11:32:01.440Z"
 *                   updatedAt: "2025-03-06T11:32:54.004Z"
 *                   __v: 0
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 5
 *                 searchKey: ""
 *                 totalDocs: 7
 *                 totalPages: 2
 *       400:
 *         description: Invalid query parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid page, perPage, or searchKey."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while fetching the rules."
 */