/**
 * @swagger
 * /demoRoles/deleteDocs/{roleId}/{companyId}/{clientId}:
 *   delete:
 *     summary: Delete documents for a role
 *     description: Deletes specific documents for a given role ID, company ID, and client ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: The unique identifier of the role whose documents will be deleted.
 *         schema:
 *           type: string
 *         example: "67b32661425c6067035df2f7"
 *       - name: companyId  # Added companyId here after roleId and before clientId
 *         in: path
 *         required: true
 *         description: The company ID associated with the role and documents.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the role and documents to be deleted.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully deleted the document for the role.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Document deleted successfully."
 *               data:
 *                 roleId: "67b32661425c6067035df2f7"  # roleId in response
 *                 companyId: "6788abe40db7c3b61ed93c70"  # Added companyId here after roleId in response
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