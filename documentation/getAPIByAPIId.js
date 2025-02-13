/**
 * @swagger
 * /api/getAPIByAPIId:
 *   get:
 *     summary: Get API details by ID
 *     description: Fetches a specific API's details using client ID and API ID.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the API.
 *         example: "client12345"
 *       - in: query
 *         name: apiId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique API ID.
 *         example: "api67890"
 *     responses:
 *       200:
 *         description: Successfully retrieved the API details.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "API details fetched successfully."
 *               data:
 *                 apiObject:
 *                   apiName: "User API"
 *                   api_id: "api67890"
 *                   active: true
 *                   path: "/api/user"
 *                   createdBy: "admin"
 *                   createdAt: "2024-02-06T12:00:00Z"
 *       404:
 *         description: API not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API not found."
 *       400:
 *         description: Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid clientId or apiId."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while fetching API details."
 */
