/**
 * @swagger
 * /rules/EditRule:
 *   put:
 *     summary: Edit an existing rule and its permissions
 *     description: Updates the details of a specific rule, including its name and associated API.
 *     tags:
 *       - Rules Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the rule.
 *                 example: "client12345"
 *               _id:
 *                 type: string
 *                 description: The unique identifier of the rule to be edited.
 *                 example: "rule98765"
 *               ruleName:
 *                 type: string
 *                 description: The new name for the rule.
 *                 example: "UpdatedRuleName"
 *               apiId:
 *                 type: string
 *                 description: The unique identifier of the associated API.
 *                 example: "api67890"
 *     responses:
 *       200:
 *         description: Rule updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Rule updated successfully."
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
 *               message: "Invalid input data."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while updating the rule."
 */
