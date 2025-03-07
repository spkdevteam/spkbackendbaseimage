/**
 * @swagger
 * /rules/toggleRule:
 *   patch:
 *     summary: Toggle the status of an existing rule entry
 *     description: Toggles the active status of a rule based on the provided rule ID and client ID. Returns a success message if the status is successfully toggled.
 *     tags:
 *       - Rule Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ruleId
 *               - clientId
 *             properties:
 *               ruleId:
 *                 type: string
 *                 description: The ID of the rule to toggle.
 *                 example: "67ca7296738754d700d6b2e9"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the rule.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Rule status successfully toggled.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully toggled the api status"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing fields."
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       404:
 *         description: Rule not found.
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