/**
 * @swagger
 * /api/createApi:
 *   post:
 *     summary: Create a new API entry
 *     description: Adds a new API entry with the specified details, including the API name, path, menu ID, company ID, and client ID. Returns a success message upon successful creation.
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
 *               - apiName
 *               - apiPath
 *               - menuId
 *               - companyId
 *               - clientId
 *             properties:
 *               apiName:
 *                 type: string
 *                 description: The name of the API being created.
 *                 example: "createApi"
 *               apiPath:
 *                 type: string
 *                 description: The path of the API to be created.
 *                 example: "/api/createApi"
 *               menuId:
 *                 type: string
 *                 description: The ID of the menu associated with the API.
 *                 example: "67b6f6da8f963fae8ff8d15f"
 *               companyId:
 *                 type: string
 *                 description: The ID of the company to which the API belongs.
 *                 example: "67b037ae038ce3ffbb097924"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the API.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: API successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Api added successfully"
 *               data:
 *                 apiName: "deleteApi"
 *                 apiPath: "/api/deleteApi"
 *                 menuId: "67b6f6da8f963fae8ff8d15f"
 *                 companyId: "67b037ae038ce3ffbb097924"
 *                 isActive: true
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 deletedAt: null
 *                 _id: "67cabd01d6a7b6b83450f803"
 *                 createdAt: "2025-03-07T09:31:45.088Z"
 *                 updatedAt: "2025-03-07T09:31:45.088Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields."
 *       409:
 *         description: Conflict, API already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API already exists."
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