/**
 * @swagger
 * /rules/DeleteRule:
 *   delete:
 *     summary: Delete a Rule and its Permissions
 *     description: Removes a specific rule and its associated permissions based on the provided rule ID and client ID.
 *     tags:
 *       - Rules Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: _id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the rule to be deleted.
 *         example: "rule98765"
 *       - in: query
 *         name: ClientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the rule.
 *         example: "client12345"
 *     responses:
 *       200:
 *         description: Rule deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Rule deleted successfully."
 *       404:
 *         description: Rule not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Rule not found."
 *       400:
 *         description: Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid _id or ClientId."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while deleting the rule."
 */
