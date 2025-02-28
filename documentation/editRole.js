/**
 * @swagger
 * /demoRoles/editRole:
 *   patch:
 *     summary: Update an existing role
 *     description: Updates the details of an existing role using the provided information. Ensures the role ID exists and updates the role under the given client ID.
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
 *               - roleId
 *               - designationId
 *               - departmentId
 *               - companyId  # Added companyId before clientId
 *               - clientId
 *             properties:
 *               roleId:
 *                 type: string
 *                 description: The unique identifier of the role to be updated.
 *                 example: "67b32661425c6067035df2f7"
 *               designationId:
 *                 type: string
 *                 description: The designation ID to be associated with the role.
 *                 example: "67b32669425c6067035df2fa"
 *               departmentId:
 *                 type: string
 *                 description: The department ID to be associated with the role.
 *                 example: "67b3266d425c6067035df2fd"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the role.
 *                 example: "6788abe40db7c3b61ed93c70"  # Added companyId before clientId
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the role.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Role successfully updated.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Role is updated successfully."
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
 *       404:
 *         description: Role not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Role not found."
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