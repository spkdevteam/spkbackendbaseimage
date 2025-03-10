/**
 * @swagger
 * /menu/getPaginatedMenu/{clientId}:
 *   get:
 *     summary: Get paginated menu entries
 *     description: Retrieves a paginated list of menus based on the specified `clientId`, page, `perPage`, and optional `searchKey`. Returns a list of menus and pagination metadata.
 *     tags:
 *       - Menu Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the menus.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: page
 *         in: query
 *         required: true
 *         description: The page number for pagination.
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         required: true
 *         description: The number of items per page.
 *         schema:
 *           type: integer
 *           example: 5
 *       - name: searchKey
 *         in: query
 *         required: false
 *         description: The search key for filtering menus.
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Successfully fetched paginated menus.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched menus"
 *               data:
 *                 - _id: "67cac338e3a8ce2d848e0652"
 *                   name: "first"
 *                   menuId: "67b037ae038ce3ffbb097924"
 *                   companyId: "67b037f8038ce3ffbb09792d"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-07T09:58:16.830Z"
 *                   updatedAt: "2025-03-07T09:58:16.830Z"
 *                   __v: 0
 *                 - _id: "67cadf61dca46ced36a2f052"
 *                   name: "second"
 *                   menuId: "67b037ae038ce3ffbb097924"
 *                   companyId: "67b037f8038ce3ffbb09792d"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-07T11:58:25.108Z"
 *                   updatedAt: "2025-03-07T11:58:25.108Z"
 *                   __v: 0
 *                 - _id: "67cadf69dca46ced36a2f055"
 *                   name: "third"
 *                   menuId: "67b037ae038ce3ffbb097924"
 *                   companyId: "67b037f8038ce3ffbb09792d"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-07T11:58:33.497Z"
 *                   updatedAt: "2025-03-07T11:58:33.497Z"
 *                   __v: 0
 *                 - _id: "67cadf71dca46ced36a2f058"
 *                   name: "fourth"
 *                   menuId: "67b037ae038ce3ffbb097924"
 *                   companyId: "67b037f8038ce3ffbb09792d"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-07T11:58:41.311Z"
 *                   updatedAt: "2025-03-07T11:58:41.311Z"
 *                   __v: 0
 *                 - _id: "67cadf78dca46ced36a2f05b"
 *                   name: "fifth"
 *                   menuId: "67b037ae038ce3ffbb097924"
 *                   companyId: "67b037f8038ce3ffbb09792d"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-07T11:58:48.822Z"
 *                   updatedAt: "2025-03-07T11:58:48.822Z"
 *                   __v: 0
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 5
 *                 searchKey: ""
 *                 totalDocs: 5
 *                 totalPages: 1
 *       400:
 *         description: Invalid query parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid query parameters."
 *       404:
 *         description: No menus found for the given criteria.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No menus found."
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