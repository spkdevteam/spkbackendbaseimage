/**
 * @swagger
 * /document/getAll/{clientId}:
 *   get:
 *     summary: Get all document properties for a specific client
 *     description: Fetches a paginated list of document properties based on client ID with optional search functionality.
 *     tags:
 *       - Document Properties
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the client whose document properties are being fetched
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination
 *       - in: query
 *         name: perPage
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of document properties per page
 *       - in: query
 *         name: searchKey
 *         required: false
 *         schema:
 *           type: string
 *         description: Search key to filter document properties by type
 *     responses:
 *       200:
 *         description: Successfully fetched document properties
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetch all Document Properties"
 *               data:
 *                 - _id: "67b037ae038ce3ffbb097924"
 *                   PropertyName: "Authority"
 *                   Type: "String"
 *          
 *                   createdAt: "2024-02-25T12:00:00Z"
 *                   updatedAt: "2024-02-25T12:10:00Z"
 *                 - _id: "67b037ae038ce3ffbb097925"
 *                   PropertyName: "Validity"
 *                   Type: "Date"
 *                   
 *                   createdAt: "2024-02-24T15:30:00Z"
 *                   updatedAt: "2024-02-24T16:00:00Z"
 *                 - _id: "67b037ae038ce3ffbb097926"
 *                   PropertyName: "Image"
 *                   Type: "String"
 *                   
 *                   createdAt: "2024-02-23T10:20:00Z"
 *                   updatedAt: "2024-02-23T10:45:00Z"
 *               metaData:
 *                 currentPage: 1
 *                 perPage: 10
 *                 searchKey: ""
 *                 totalData: 10
 *                 totalPages: 5
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters"
 *       401:
 *         description: Unauthorized, missing or invalid token
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access"
 *       404:
 *         description: No document properties found
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No document properties found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
