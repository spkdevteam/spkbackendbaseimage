/**
 * @swagger
 * /document-master/getAll/{clientId}:
 *   get:
 *     summary: Retrieve all document masters
 *     description: "Fetches all document master entries associated with the specified client ID, with optional pagination and search functionality."
 *     tags:
 *       - Document Master
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: "The client ID associated with the document masters."
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: page
 *         in: query
 *         required: false
 *         description: "The page number to retrieve (default is 1)."
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         required: false
 *         description: "The number of items per page (default is 10)."
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: searchKey
 *         in: query
 *         required: false
 *         description: "The search keyword to filter the document masters (optional)."
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: "Successfully fetched all document masters."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetched all Document Master"
 *               data:
 *                 - documentMasterId: "67b9859a31301b22209ecb68"
 *                   Name: "Passport Documents"
 *                   Property:
 *                     - PropertyName: "Passport Image"
 *                       Type: "String"
 *                     - PropertyName: "Issue Date"
 *                       Type: "Date"
 *                   Required: true
 *                   createdAt: "2025-02-26T08:35:00Z"
 *                   updatedAt: "2025-02-26T08:35:00Z"
 *                 - documentMasterId: "67b9859a31301b22209ecb69"
 *                   Name: "Visa Documents"
 *                   Property:
 *                     - PropertyName: "Visa Number"
 *                       Type: "String"
 *                     - PropertyName: "Issue Date"
 *                       Type: "Date"
 *                   Required: true
 *                   createdAt: "2025-02-26T08:30:00Z"
 *                   updatedAt: "2025-02-26T08:30:00Z"
 *                 - documentMasterId: "67b9859a31301b22209ecb70"
 *                   Name: "Driving License"
 *                   Property:
 *                     - PropertyName: "License Number"
 *                       Type: "String"
 *                     - PropertyName: "Expiration Date"
 *                       Type: "Date"
 *                   Required: true
 *                   createdAt: "2025-02-26T08:35:00Z"
 *                   updatedAt: "2025-02-26T08:35:00Z"
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 10
 *                 searchKey: ""
 *                 totalData: 10
 *                 totalPages: 5
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
 *         description: "No document masters found for the provided client ID."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No document masters found."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
