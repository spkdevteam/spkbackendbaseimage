/**
 * @swagger
 * /demoRoles/assignDocs:
 *   post:
 *     summary: Assign documents to a role
 *     description: Assigns specific documents to a role for a given client ID. The request includes the document ID, the list of documents to be assigned, and the client ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - documentId
 *               - arr
 *               - clientId
 *             properties:
 *               documentId:
 *                 type: string
 *                 description: The unique identifier of the document to be assigned.
 *                 example: "67b32661425c6067035df2f7"
 *               arr:
 *                 type: array
 *                 description: A list of documents to be assigned to the role.
 *                 items:
 *                   type: object
 *                   required:
 *                     - name
 *                     - authority
 *                     - validity
 *                     - image
 *                     - validation
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the document.
 *                       example: "aadhar"
 *                     authority:
 *                       type: string
 *                       description: The authority that issued the document.
 *                       example: "govt of india"
 *                     validity:
 *                       type: string
 *                       description: The validity of the document (e.g., "aadhar number").
 *                       example: "aadhar number"
 *                     image:
 *                       type: string
 *                       description: The URL of the document image.
 *                       example: "https://s3.aws.amazon.com/blahblahblah"
 *                     validation:
 *                       type: string
 *                       description: The validation status of the document (e.g., "life time").
 *                       example: "life time"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the role and documents.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully assigned documents to the role.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Documents are assigned."
 *               data:
 *                 assignedDocuments:
 *                   - name: "aadhar"
 *                     authority: "govt of india"
 *                     validity: "aadhar number"
 *                     image: "https://s3.aws.amazon.com/blahblahblah"
 *                     validation: "life time"
 *       400:
 *         description: Invalid request data or missing fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing fields."
 *       404:
 *         description: Document not found or client ID does not exist.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document or client not found."
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