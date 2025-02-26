/**
 * @swagger
 * /demoRoles/getDocsByRoleId/{roleId}/{clientId}:
 *   get:
 *     summary: Retrieve documents for a role by role ID
 *     description: Retrieves all documents associated with a specific role ID and client ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: The unique identifier of the role whose documents will be retrieved.
 *         schema:
 *           type: string
 *         example: "67b32661425c6067035df2f7"
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
 *               status: true
 *               message: "Here are all the documents of this role"
 *               data:
 *                 - name: "aadhar"
 *                   authority: "govt of india"
 *                   validity: "aadhar number"
 *                   image: "https://s3.aws.amazon.com/blahblahblah"
 *                   validation: "life time"
 *                 - name: "Pan Card"
 *                   authority: "govt of india"
 *                   validity: "Pan number"
 *                   image: "https://s3.aws.amazon.com/blahblahblah"
 *                   validation: "life time"
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