/**
 * @swagger
 * /demoRoles/deleteRole/{roleId}/{companyId}/{clientId}:
 *   delete:
 *     summary: Delete a role
 *     description: Deletes a role based on the provided role ID, company ID, and client ID. Ensures all are valid before deletion.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: The unique identifier of the role to be deleted.
 *         schema:
 *           type: string
 *           example: "67b32661425c6067035df2f7"
 *       - name: companyId  # Added companyId after roleId and before clientId
 *         in: path
 *         required: false
 *         description: The company ID associated with the role. Default is "6788abe40db7c3b61ed93c70".
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: clientId
 *         in: path
 *         required: false
 *         description: The client ID associated with the role. Default is "6788abe40db7c3b61ed93c70".
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Role successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Role is deleted successfully."
 *               data:
 *                 roleId: "67b32661425c6067035df2f7"  # roleId in response
 *                 companyId: "6788abe40db7c3b61ed93c70"  # Added companyId here after roleId in response
 *       400:
 *         description: Invalid role ID, company ID, or client ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid role ID, company ID, or client ID."
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