/**
 * @swagger
 * /api/toggleApi:
 *   patch:
 *     summary: Toggle the status of an existing API entry
 *     description: Toggles the active status of an API based on the provided API ID and client ID. Returns a success message if the status is successfully toggled.
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
 *               - clientId
 *             properties:
 *               apiId:
 *                 type: string
 *                 description: The ID of the API to toggle.
 *                 example: "67ca8d14ef39c45b8d9f47b2"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the API.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: API status successfully toggled.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully toggled the api status"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing fields."
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       404:
 *         description: API not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API not found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */