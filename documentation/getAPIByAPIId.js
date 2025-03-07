/**
 * @swagger
 * /api/getOneApi/{apiId}/{clientId}:
 *   get:
 *     summary: Retrieve a specific API entry
 *     description: Fetches the details of a specific API based on the provided API ID and client ID.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: apiId
 *         in: path
 *         required: true
 *         description: The ID of the API to retrieve.
 *         schema:
 *           type: string
 *           example: "67cab890e32b094449195679"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the API.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: API successfully fetched.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched the api"
 *               data:
 *                 _id: "67cab890e32b094449195679"
 *                 apiName: "createApi"
 *                 apiPath: "/api/createApi"
 *                 menuId: "67b6f6da8f963fae8ff8d15f"
 *                 companyId: "67b037ae038ce3ffbb097924"
 *                 isActive: true
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 deletedAt: null
 *                 createdAt: "2025-03-07T09:12:48.213Z"
 *                 updatedAt: "2025-03-07T09:12:48.213Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing fields."
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