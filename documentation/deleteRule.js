/**
 * @swagger
 * /rules/deleteRule/{ruleId}/{clientId}:
 *   delete:
 *     summary: Delete a Rule
 *     description: Deletes a specific rule based on the provided rule ID and client ID.
 *     tags:
 *       - Rule Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ruleId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the rule to be deleted.
 *         example: "67ceb170be2d734f525fcdfb"
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the rule.
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Rule deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "The rule is deleted"
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
 *               message: "Invalid ruleId or clientId."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while deleting the rule."
 */