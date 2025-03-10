/**
 * @swagger
 * /designation/editDesignation:
 *   put:
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
 *               - designationId
 *               - designationName
 *               - clientId
 *             properties:
 *               designationId:
 *                 type: string
 *                 description: The ID of the designation to be updated.
 *                 example: "67cbdce5672d6324f4e4f3c3"
 *               designationName:
 *                 type: string
 *                 description: The updated name of the designation.
 *                 example: "Developer"
 *               shortName:
 *                 type: string
 *                 description: The updated short name for the designation.
 *                 example: "dev"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the designation.
 *                 example: "67b037f8038ce3ffbb09792d"
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
 *               status: true
 *               message: "Designation is updated"
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