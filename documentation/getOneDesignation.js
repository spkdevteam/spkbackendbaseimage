/**
 * @swagger
 * /designation/getOneDesignation/{designationId}/{clientId}:
 *   get:
 *     summary: Get a specific designation by ID
 *     description: Retrieves a specific designation based on the provided designation ID and client ID.
 *     tags:
 *       - Designation Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: designationId
 *         required: true
 *         description: The ID of the designation to retrieve.
 *         schema:
 *           type: string
 *           example: "67cbe23636344733e25e2d70"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the designation.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Designation retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Designation is here"
 *               data:
 *                 _id: "67b80addc8af42b7fd745271"
 *                 title: "Junior Developer"
 *                 shortName: "jr. dev"
 *                 displayId: "1000015"
 *                 createdBy: null
 *                 deletedAt: null
 *                 isActive: false
 *                 createdAt: "2025-02-21T05:10:53.129Z"
 *                 updatedAt: "2025-02-21T05:10:53.129Z"
 *                 __v: 0
 *       400:
 *         description: Validation error, invalid or missing ID/clientId.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid ID or client ID."
 *       404:
 *         description: Designation not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Designation not found."
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