/**
 * @swagger
 * /api/GetAllAPI:
 *   get:
 *     summary: Get all APIs for a client
 *     description: Retrieves a list of APIs based on client ID, pagination, and search filters.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ClientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID to filter APIs.
 *         example: "client12345"
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination.
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results per page.
 *       - in: query
 *         name: searchKey
 *         schema:
 *           type: string
 *         description: Optional search term to filter results.
 *         example: "user"
 *     responses:
 *       200:
 *         description: Successfully retrieved the API list.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "APIs fetched successfully."
 *               data:
 *                 metaData:
 *                   page: 1
 *                   perPage: 10
 *                   searchKey: "user"
 *                   totalData: 100
 *                 result:
 *                   - apiName: "User API"
 *                     api_id: "api12345"
 *                     active: true
 *                     path: "/api/user"
 *                   - apiName: "Product API"
 *                     api_id: "api67890"
 *                     active: false
 *                     path: "/api/product"
 *       400:
 *         description: Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while fetching APIs."
 */
