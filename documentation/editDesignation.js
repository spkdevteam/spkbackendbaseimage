/**
 * @swagger
 * /designation/editOneDesignation:
 *   patch:
 *     summary: Edit an existing designation
 *     description: Updates the designation with the provided details. Requires the designation ID and client ID to perform the update.
 *     tags:
 *       - Designation Management
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
 *               - title
 *               - clientId
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the designation to be updated.
 *                 example: "67b80addc8af42b7fd745271"
 *               title:
 *                 type: string
 *                 description: The updated title of the designation.
 *                 example: "Junior developer"
 *               shortName:
 *                 type: string
 *                 description: The updated short name for the designation.
 *                 example: "jr. dev"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the designation.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Designation successfully updated.
 *         content:
 *           application/json:
 *             example:
 *               message: "Designation is updated"
 *               data:
 *                 _id: "67b80addc8af42b7fd745271"
 *                 title: "Junior developer"
 *                 shortName: "jr. dev"
 *                 displayId: "1000015"
 *                 createdBy: null
 *                 deletedAt: null
 *                 isActive: false
 *                 createdAt: "2025-02-21T05:10:53.129Z"
 *                 updatedAt: "2025-02-21T07:17:20.835Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
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