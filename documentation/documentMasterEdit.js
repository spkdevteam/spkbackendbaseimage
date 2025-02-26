/**
 * @swagger
 * /document-master/edit:
 *   put:
 *     summary: Update an existing document master entry
 *     description: "Updates an existing document master entry with the specified document properties and validation."
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
 *               - id
 *               - Name
 *               - Property
 *               - Required
 *               - clientId
 *             properties:
 *               id:
 *                 type: string
 *                 description: "The unique identifier of the document master."
 *                 example: "67b9859a31301b22209ecb68"
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
 *                       example: "Passport Image"
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
 *       200:
 *         description: "Document master successfully updated."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document Master updated successfully"
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
 *       404:
 *         description: "Document master not found."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document master not found."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
