/**
 * @swagger
 * /document/update:
 *   put:
 *     summary: Update a document property
 *     description: Updates a document property using the provided client ID and document ID.
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
 *               - PropertName
 *               - Type
 *               - clientId
 *               - id
 *             properties:
 *               PropertName:
 *                 type: string
 *                 description: The name of the document property.
 *                 example: "Image"
 *               Type:
 *                 type: string
 *                 description: The type of document.
 *                 example: "String"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the document property.
 *                 example: "6788abe40db7c3b61ed93c70"
 *               id:
 *                 type: string
 *                 description: The document property ID.
 *                 example: "67b037ae038ce3ffbb097924"
 *     responses:
 *       200:
 *         description: Document property updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document Properties updated successfully"
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