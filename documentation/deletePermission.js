/**
 * @swagger
 * /demoRoles/deletePermissions/{roleId}/{clientId}:
 *   delete:
 *     summary: Delete a permission from a role
 *     description: Deletes a specific permission for a given client ID and permission ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: The unique identifier of the permission to be deleted.
 *         schema:
 *           type: string
 *         example: "abcd1234efgh5678"
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