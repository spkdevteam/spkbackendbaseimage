/**
 * @swagger
 * /Api/CreateAPI:
 *   post:
 *     summary: Create a new API entry
 *     description: Checks if the API path and client ID exist before saving a new entry. Identifies the user from the token and updates the `createdBy` field.
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
 *               - name
 *               - clientId
 *             properties:
 *               name:
 *                 type: string
 *                 description: The API path to be created.
 *                 example: "/user/getDetails"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the API.
 *                 example: "client12345"
 *     responses:
 *       201:
 *         description: API successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "API created successfully."
 *               data:
 *                 _id: "65a3b2c7f1d23a7890c12345"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API name or clientId is missing."
 *       409:
 *         description: Conflict, API already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API name already exists for this client."
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
