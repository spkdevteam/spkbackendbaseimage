/**
 * @swagger
 * /document-master/create:
 *   post:
 *     summary: Create a new document master entry
 *     description: "Creates a new document master entry with the specified document properties and validation."
 *     tags:
 *       - Document Master
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *               - Property
 *               - Required
 *               - clientId
 *             properties:
 *               Name:
 *                 type: string
 *                 description: "The name of the document master."
 *                 example: "Passport Documents"
 *               Property:
 *                 type: array
 *                 description: "An array of properties associated with the document."
 *                 items:
 *                   type: object
 *                   required:
 *                     - PropertyName
 *                     - Type
 *                   properties:
 *                     PropertyName:
 *                       type: string
 *                       description: "The name of the document property."
 *                       example: "Passport Number"
 *                     Type:
 *                       type: string
 *                       description: "The data type of the document property."
 *                       example: "String"
 *               Required:
 *                 type: boolean
 *                 description: "Indicates if the document is required."
 *                 example: true
 *               clientId:
 *                 type: string
 *                 description: "The client ID associated with the document master."
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: "Document master successfully created."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document Master is created successfully"
 *       400:
 *         description: "Validation error or missing required fields."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data."
 *       401:
 *         description: "Unauthorized, missing or invalid token."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       409:
 *         description: "Conflict, document master already exists."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document master already exists."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
