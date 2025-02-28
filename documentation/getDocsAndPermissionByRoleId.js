/**
 * @swagger
 * /demoRoles/getByRoleId/{roleId}/{companyId}/{clientId}:
 *   get:
 *     summary: Get permissions and documents for a role
 *     description: Retrieves the permissions and associated documents for a specific role and client ID.
 *     tags:
 *       - Role Management
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         description: The unique identifier of the role.
 *         schema:
 *           type: string
 *           example: "67b32661425c6067035df2f7"
 *       - in: path
 *         name: companyId  # Added companyId before clientId in the parameters section
 *         required: true
 *         description: The company ID associated with the role.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the role.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the permissions and documents for the role.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "All the permissions and docs of that role"
 *               data:
 *                 roleId: "67b32661425c6067035df2f7"
 *                 companyId: "6788abe40db7c3b61ed93c70"  # Added companyId after roleId in the response
 *                 permissions:
 *                   - "read"
 *                   - "write"
 *                   - "execute"
 *                 document:
 *                   - "aadhar card"
 *                   - "pan card"
 *       400:
 *         description: Invalid request data or missing parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing parameters."
 *       404:
 *         description: Role or client not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Role or client not found."
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