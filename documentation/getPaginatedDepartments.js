/**
 * @swagger
 * /department/getPaginated/{clientId}:
 *   get:
 *     summary: Get paginated list of departments
 *     description: Fetches a paginated list of departments based on the provided client ID, page number, per page limit, and optional search key for filtering.
 *     tags:
 *       - Department Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the departments.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: page
 *         in: query
 *         required: true
 *         description: The page number to fetch.
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         required: true
 *         description: The number of departments to show per page.
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: searchKey
 *         in: query
 *         required: false
 *         description: The search key to filter departments.
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Successfully fetched departments.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched departments"
 *               data:
 *                 - _id: "67d05dbbf80b6ff94ed5f31e"
 *                   deptName: "Admins"
 *                   displayId: "0"
 *                   companyId: "67b037ae038ce3ffbb097924"
 *                   description: "Demo admin department."
 *                   deletedAt: null
 *                   isActive: true
 *                   old_Id: null
 *                   shift:
 *                     - "60b8d295fbd85c6e3b4f95f8"
 *                     - "60b8d295fbd85c6e3b4f95f8"
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   createdAt: "2025-03-11T07:17:26.204Z"
 *                   updatedAt: "2025-03-11T09:49:47.660Z"
 *                   __v: 0
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 10
 *                 searchKey: ""
 *                 totalDocs: 1
 *                 totalPages: 1
 *       400:
 *         description: Validation error or missing required parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required parameters or invalid data."
 *       404:
 *         description: No departments found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No departments found."
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
