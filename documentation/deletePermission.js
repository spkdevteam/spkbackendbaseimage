/**
 * @swagger
 * /demoRoles/deletePermissions/{roleId}/{companyId}/{clientId}:
 *   delete:
 *     summary: Delete a permission from a role
 *     description: Deletes a specific permission for a given role ID, company ID, and client ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: The unique identifier of the role from which the permission is to be deleted.
 *         schema:
 *           type: string
 *         example: "abcd1234efgh5678"
 *       - name: companyId  # Added companyId here after roleId and before clientId
 *         in: path
 *         required: true
 *         description: The company ID associated with the role.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the role and permission to be deleted.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully deleted the permission.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Permission deleted successfully."
 *               data:
 *                 roleId: "abcd1234efgh5678"  # roleId in response
 *                 companyId: "6788abe40db7c3b61ed93c70"  # Added companyId here after roleId in response
 *       400:
 *         description: Invalid request data or missing fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing fields."
 *       404:
 *         description: Permission not found or client ID does not exist.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Permission or client not found."
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