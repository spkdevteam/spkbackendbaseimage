/**
 * @swagger
 * /api/editApi:
 *   put:
 *     summary: Edit an existing API entry
 *     description: Updates an existing API entry with the provided details, such as API name, path, and client ID. Returns a success message if the update is successful.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - apiId
 *               - apiName
 *               - apiPath
 *               - clientId
 *             properties:
 *               apiId:
 *                 type: string
 *                 description: The ID of the API to be updated.
 *                 example: "67ca89b39e91d8f8b37bb416"
 *               apiName:
 *                 type: string
 *                 description: The new name of the API.
 *                 example: "editApi"
 *               apiPath:
 *                 type: string
 *                 description: The new path of the API.
 *                 example: "/api/editApi"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the API.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: API successfully updated.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Api is updated"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields."
 *       404:
 *         description: API not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API not found."
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