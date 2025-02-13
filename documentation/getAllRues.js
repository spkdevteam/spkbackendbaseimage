/**
 * @swagger
 * /rules/GetAllRules:
 *   get:
 *     summary: Retrieve all rules and permissions
 *     description: Fetches a list of all rules and their associated permissions, with support for pagination and search functionality.
 *     tags:
 *       - Rules Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: clientID
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the rules.
 *         example: "client12345"
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number to retrieve.
 *         example: 1
 *       - in: query
 *         name: perPage
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of items per page.
 *         example: 10
 *       - in: query
 *         name: Searchkey
 *         required: false
 *         schema:
 *           type: string
 *         description: A keyword to search for specific rules.
 *         example: "Admin"
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of rules.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Rules fetched successfully."
 *               data:
 *                 - _id: "rule98765"
 *                   branchId: "branch54321"
 *                   ruleName: "AdminAccess"
 *                   apiId: "api67890"
 *               metadata:
 *                 page: 1
 *                 perPage: 10
 *                 Searchkey: "Admin"
 *                 totalData: 25
 *       400:
 *         description: Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid clientID or other parameters."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while fetching the rules."
 */
