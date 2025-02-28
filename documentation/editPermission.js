/**
 * @swagger
 * /demoRoles/editPermission/:
 *   patch:
 *     summary: Edit permissions for a role
 *     description: Edits specific permissions for a given role and client ID. The request includes the role ID, the updated list of permissions, and the client ID.
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
 *               - arr
 *               - companyId  # Added companyId before clientId
 *               - clientId
 *             properties:
 *               roleId:
 *                 type: string
 *                 description: The unique identifier of the role whose permissions will be edited.
 *                 example: "67b32661425c6067035df2f7"
 *               arr:
 *                 type: array
 *                 description: A list of permissions to be updated for the role.
 *                 items:
 *                   type: object
 *                   required:
 *                     - permission
 *                     - schema
 *                   properties:
 *                     permission:
 *                       type: string
 *                       description: The permission to be updated (e.g., "read", "write").
 *                       example: "read"
 *                     schema:
 *                       type: string
 *                       description: The schema that the permission applies to (e.g., "user", "order").
 *                       example: "user"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the role and permissions.
 *                 example: "6788abe40db7c3b61ed93c70"  # Added companyId before clientId
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the role and permissions.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully updated permissions for the role.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Permissions are updated successfully."
 *       400:
 *         description: Invalid request data or missing fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing fields."
 *       404:
 *         description: Role not found or client ID does not exist.
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