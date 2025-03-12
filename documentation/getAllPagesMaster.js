/**
 * @swagger
 * /pagesMaster/getPaginatedPageMaster/{clientId}:
 *   get:
 *     summary: Get paginated list of pages
 *     description: Fetches a paginated list of pages for a specific client. Supports optional search and pagination parameters.
 *     tags:
 *       - Pages Master Management
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID whose pages need to be fetched.
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination.
 *       - in: query
 *         name: perPage
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of results per page.
 *       - in: query
 *         name: searchKey
 *         required: false
 *         schema:
 *           type: string
 *         description: A keyword to search pages by menuName, pathName, or reporting fields.
 *     responses:
 *       200:
 *         description: Successfully fetched pages.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched Pages"
 *               data:
 *                 - _id: "67d114b4e3ef38c716e71923"
 *                   menuName: "testMenu1"
 *                   pathName: "testPathMenu1"
 *                   reporting: "reporting1"
 *                   companyId: "67b04146e8875393e56abbd6"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-12T04:59:32.396Z"
 *                   updatedAt: "2025-03-12T04:59:32.396Z"
 *                   __v: 0
 *                 - _id: "67d11656835ef4b66de9389d"
 *                   menuName: "testMenu3"
 *                   pathName: "testPath3"
 *                   reporting: "testReporting"
 *                   companyId: "67b04146e8875393e56abbd6"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-12T05:06:30.641Z"
 *                   updatedAt: "2025-03-12T06:06:51.980Z"
 *                   __v: 0
 *                   editedBy: "67c944517f8fcf7d12e92f1d"
 *                 - _id: "67d117b1c64440b76263dd5f"
 *                   menuName: "testMenu4"
 *                   pathName: "testPathMenu4"
 *                   reporting: "reporting4"
 *                   companyId: "67b04146e8875393e56abbd6"
 *                   isActive: true
 *                   createdBy: "67c944517f8fcf7d12e92f1d"
 *                   deletedAt: null
 *                   oldId: null
 *                   createdAt: "2025-03-12T05:12:17.579Z"
 *                   updatedAt: "2025-03-12T05:12:17.579Z"
 *                   __v: 0
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 10
 *                 searchKey: ""
 *                 totalDocs: 3
 *                 totalPages: 1
 *       400:
 *         description: Bad request due to invalid parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid query parameters."
 *       404:
 *         description: No pages found for the given client.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No pages found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
