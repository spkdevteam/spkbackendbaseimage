/**
 * @swagger
 * /document/getById/{clientId}/{id}:
 *   get:
 *     summary: Get a document property by ID
 *     description: Retrieves a document property using the provided client ID and document ID.
 *     tags:
 *       - Document Properties
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the document property.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: path
 *         name: id
 *         required: true
 *         description: The document property ID.
 *         schema:
 *           type: string
 *         example: "67b037ae038ce3ffbb097924"
 *     responses:
 *       200:
 *         description: Document property retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetch Document Property By Id"
 *               data:
 *                 _id: "67b037ae038ce3ffbb097924"
 *                 PropertyName: "Authority"
 *                 Type: "String"
 *                 clientId: "6788abe40db7c3b61ed93c70"
 *                 createdAt: "2024-02-25T12:00:00Z"
 *                 updatedAt: "2024-02-25T12:10:00Z"
 *       400:
 *         description: Invalid request parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid client ID or document ID."
 *       404:
 *         description: Document property not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document Property not found."
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