/**
 * @swagger
 * /rules/deleteRuleAndPermission/{id}/{clientId}:
 *   delete:
 *     summary: Delete a rule and its associated permissions
 *     description: Deletes a specific rule and its associated permissions based on the provided rule ID and client ID.
 *     tags:
 *       - Rules Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the rule to be deleted.
 *         required: true
 *         schema:
 *           type: string
 *           example: "67bc2385dce421584278b54d"
 *       - name: clientId
 *         in: path
 *         description: The client ID associated with the rule.
 *         required: true
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Rule and permissions successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "The particular rule is deleted."
 *       400:
 *         description: Invalid ID or client ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid rule ID or client ID."
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       404:
 *         description: Rule not found for the given ID and client ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Rule not found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */