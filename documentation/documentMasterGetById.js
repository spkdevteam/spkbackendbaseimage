/**
 * @swagger
 * /document-master/getById/{clientId}/{documentMasterId}:
 *   get:
 *     summary: Retrieve a document master by ID
 *     description: "Fetches a specific document master entry associated with the given client ID and document master ID."
 *     tags:
 *       - Document Master
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: "The client ID associated with the document master."
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: documentMasterId
 *         in: path
 *         required: true
 *         description: "The unique document master ID to fetch."
 *         schema:
 *           type: string
 *           example: "67b9859a31301b22209ecb68"
 *     responses:
 *       200:
 *         description: "Successfully fetched the document master by ID."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Document master fetch by documentMasterId"
 *               data:
 *                 documentMasterId: "67b9859a31301b22209ecb68"
 *                 Name: "Passport Documents"
 *                 Property:
 *                   - PropertyName: "Passport Image"
 *                     Type: "String"
 *                   - PropertyName: "Issue Date"
 *                     Type: "Date"
 *                 Required: true
 *                 createdAt: "2025-02-26T08:30:00Z"
 *                 updatedAt: "2025-02-26T08:30:00Z"
 *       400:
 *         description: "Invalid request or missing parameters."
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
 *         description: "Document master not found for the provided client ID and document master ID."
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
