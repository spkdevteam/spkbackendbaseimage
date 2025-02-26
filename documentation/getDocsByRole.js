/**
 * @swagger
 * /demoRoles/getDocsByRole/{role}/{clientId}:
 *   get:
 *     summary: Retrieve documents for a role by role ID
 *     description: Retrieves a list of document names associated with a specific role ID and client ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: role
 *         in: path
 *         required: true
 *         description: Name of the role you are searching for
 *         schema:
 *           type: string
 *         example: "admin"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the role whose documents will be retrieved.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully retrieved documents for the role.
 *         content:
 *           application/json:
 *             example:
 *               message: "Documents"
 *               data:
 *                 role: "67b32661425c6067035df2f7"
 *                 documents:
 *                   - "aadhar card"
 *                   - "pan card"
 *       400:
 *         description: Invalid request data or missing fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing fields."
 *       404:
 *         description: Role or client ID does not exist.
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