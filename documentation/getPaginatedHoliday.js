/**
 * @swagger
 * /demoHoliday/getPaginatedholiday/{holidayId}/{clientId}:
 *   get:
 *     summary: Retrieve a paginated list of holidays for a client
 *     description: Retrieves a list of holidays for a specific client with pagination and search filtering.
 *     tags:
 *       - Holiday Management
 *     parameters:
 *       - in: path
 *         name: holidayId
 *         required: true
 *         description: The holiday ID for which the holidays are being fetched.
 *         schema:
 *           type: string
 *           example: "67bc3c3fd0fc20776adab0b6"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID for which the holidays are being fetched.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - in: query
 *         name: page
 *         required: false
 *         description: The page number for pagination.
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: perPage
 *         required: false
 *         description: The number of results per page.
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: searchKey
 *         required: false
 *         description: The search key to filter the holidays.
 *         schema:
 *           type: string
 *           example: ""
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched the holidays with pagination and filtering.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched the holidays"
 *               data:
 *                 - holidayId: "67bc3c3fd0fc20776adab0b6"
 *                   companyId: "67b32661425c6067035df2f7"
 *                   holiday: "September 10, 2025 00:00"
 *                   holidayName: "Durga Puja"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   createdAt: "2025-02-24T09:30:39.657Z"
 *                   updatedAt: "2025-02-24T10:28:52.398Z"
 *                   __v: 0
 *                 - holidayId: "67bc3c4dd0fc20776adab0ba"
 *                   companyId: "67b32661425c6067035df2f7"
 *                   holiday: "September 10, 2025 00:00"
 *                   holidayName: "Durga Puja"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   createdAt: "2025-02-24T09:30:53.500Z"
 *                   updatedAt: "2025-02-24T09:30:53.500Z"
 *                   __v: 0
 *                 - holidayId: "67bc3c58d0fc20776adab0bc"
 *                   companyId: "67b32661425c6067035df2f7"
 *                   holiday: "September 10, 2025 00:00"
 *                   holidayName: "Durga Puja"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
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
 *         description: Invalid request data or missing parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing parameters."
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