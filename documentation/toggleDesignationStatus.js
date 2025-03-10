/**
 * @swagger
 * /designation/toggleDesignation:
 *   patch:
 *     summary: Toggle the status of a designation
 *     description: Toggles the status of the designation based on the provided designation ID and client ID. This can be used to activate or deactivate a designation.
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
 *               - designationId
 *               - clientId
 *             properties:
 *               designationId:
 *                 type: string
 *                 description: The ID of the designation whose status will be toggled.
 *                 example: "67cbe23636344733e25e2d70"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the designation.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Designation status successfully toggled.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully toggled the api status"
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