/**
 * @swagger
 * /demoRoles/getPermissionByRole/{role}/{companyId}/{clientId}:
 *   get:
 *     summary: Retrieve permissions for a role by role ID
 *     description: Retrieves a list of permissions associated with a specific role, company ID, and client ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: role
 *         in: path
 *         required: true
 *         description: The name of the role you're searching for.
 *         schema:
 *           type: string
 *         example: "admin"
 *       - name: companyId
 *         in: path
 *         required: true
 *         description: The company ID associated with the role.
 *         schema:
 *           type: string
 *         example: "67c04caf42adcc1853fa464d"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the role whose permissions will be retrieved.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully retrieved permissions for the role.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "These are permissions available for the role"
 *               data:
 *                 role: "67b32661425c6067035df2f7"
 *                 companyId: "67c04caf42adcc1853fa464d"
 *                 permissions:
 *                   - "read"
 *                   - "write"
 *                   - "execute"
 *       400:
 *         description: Invalid request data or missing fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing fields."
 *       404:
 *         description: Role, company, or client ID does not exist.
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