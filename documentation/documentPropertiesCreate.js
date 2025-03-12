/**
 * @swagger
 * /document/create:
 *   post:
 *     summary: Create a new document property
 *     description: "Creates a new document property entry after validating the required fields."
 *     tags:
 *       - Document Properties
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - PropertyName
 *               - Type
 *               - clientId
 *             properties:
 *               PropertyName:
 *                 type: string
 *                 description: "The name of the document property. Allowed values are: 'Authority', 'Validity', 'Image', 'Validation'."
 *                 example: "Authority"
 *               Type:
 *                 type: string
 *                 description: "The data type of the document property. Allowed values are: 'String', 'Number', 'Boolean', 'Date'."
 *                 example: "String"
 *               clientId:
 *                 type: string
 *                 description: "The client ID associated with the document property."
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: "Document property successfully created."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document Property created successfully"
 *               data:
 *                 _id: "67b037ae038ce3ffbb097924"
 *       400:
 *         description: "Validation error or missing required fields."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid PropertyName"
 *       409:
 *         description: "Conflict, document property already exists."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document property already exists."
 *       401:
 *         description: "Unauthorized, missing or invalid token."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
