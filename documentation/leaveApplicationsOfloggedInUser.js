/**
 * @swagger
 * /demoLeaves/leaveOfAllLoggedInEmployees/{companyId}/{clientId}:
 *   get:
 *     summary: Get leave information of all logged-in employees for a client with pagination
 *     description: Retrieves the leave information of all logged-in employees for a specific client, with pagination options for results.
 *     tags:
 *       - Leave Management
 *     parameters:
 *       - in: path
 *         name: companyId
 *         required: true
 *         description: The company ID for which the leave information of logged-in employees is being retrieved.
 *         schema:
 *           type: string
 *           example: "67b32661425c6067035df2f7"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID for which the leave information of logged-in employees is being retrieved.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - in: query
 *         name: page
 *         required: false
 *         description: The page number for pagination (default is 1).
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: perPage
 *         required: false
 *         description: The number of records to return per page (default is 10).
 *         schema:
 *           type: integer
 *           example: 10
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the leave information of all logged-in employees with pagination details.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Leave of all the logged in employees"
 *               data:
 *                 - Name: "Peter jones"
 *                   Address: "68/2 Southeast road, London"
 *                   country: "England"
 *                 - Name: "Devon james"
 *                   Address: "New gate street, New york"
 *                   country: "United States"
 *                 - Name: "Adam Park"
 *                   Address: "28 Steve harvey street, Minnesota"
 *                   country: "United States"
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 10
 *                 totalDocs: 20
 *                 totalPages: 5
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