/**
 * @swagger
 * /department/getPaginated/{clientId}:
 *   get:
 *     summary: Get paginated list of departments
 *     description: Fetches a paginated list of departments based on the provided client ID, page number, and per page limit. It also supports a search key for filtering.
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
 *           example: "IT"
 *     responses:
 *       200:
 *         description: Successfully fetched departments.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched departments"
 *               data:
 *                 - _id: "67b700d7befc9b41d31eefa1"
 *                   deptName: "IT"
 *                   displayId: "1000013"
 *                   companyId: null
 *                   description: "Changing for the testing"
 *                   deletedAt: null
 *                   isActive: true
 *                   old_Id: null
 *                   createdBy: null
 *                   createdAt: "2025-02-20T10:15:51.415Z"
 *                   updatedAt: "2025-02-22T11:59:35.079Z"
 *                   __v: 0
 *                 - _id: "67b71d9662b72aaca6cbf009"
 *                   deptName: "IT"
 *                   displayId: "1000015"
 *                   companyId: null
 *                   description: "Information Technology"
 *                   deletedAt: null
 *                   isActive: true
 *                   old_Id: null
 *                   createdBy: null
 *                   createdAt: "2025-02-20T12:18:30.962Z"
 *                   updatedAt: "2025-02-20T12:18:30.962Z"
 *                   __v: 0
 *                 - _id: "67b71d9962b72aaca6cbf00c"
 *                   deptName: "IT"
 *                   displayId: "1000016"
 *                   companyId: null
 *                   description: "Information Technology"
 *                   deletedAt: null
 *                   isActive: true
 *                   old_Id: null
 *                   createdBy: null
 *                   createdAt: "2025-02-20T12:18:33.392Z"
 *                   updatedAt: "2025-02-20T12:18:33.392Z"
 *                   __v: 0
 *                 - _id: "67b71d9a62b72aaca6cbf00f"
 *                   deptName: "IT"
 *                   displayId: "1000017"
 *                   companyId: null
 *                   description: "Information Technology"
 *                   deletedAt: null
 *                   isActive: true
 *                   old_Id: null
 *                   createdBy: null
 *                   createdAt: "2025-02-20T12:18:34.003Z"
 *                   updatedAt: "2025-02-20T12:18:34.003Z"
 *                   __v: 0
 *                 - _id: "67b71d9a62b72aaca6cbf012"
 *                   deptName: "IT"
 *                   displayId: "1000018"
 *                   companyId: null
 *                   description: "Information Technology"
 *                   deletedAt: null
 *                   isActive: true
 *                   old_Id: null
 *                   createdBy: null
 *                   createdAt: "2025-02-20T12:18:34.522Z"
 *                   updatedAt: "2025-02-20T12:18:34.522Z"
 *                   __v: 0
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 5
 *                 searchKey: "IT"
 *                 totalDocs: 17
 *                 totalPages: 4
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