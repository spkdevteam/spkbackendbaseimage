/**
 * @swagger
 * /rules/getRuleById/{ruleId}/{clientId}:
 *   get:
 *     summary: Get Rule by ID
 *     description: Fetches a specific rule based on the provided rule ID and client ID.
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
 *         description: The unique identifier of the rule to be fetched.
 *         example: "67c83eddb7b9a86a3e1ab5d8"
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the rule.
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully fetched the rule.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Rule fetched successfully"
 *               data:
 *                 _id: "67c83eddb7b9a86a3e1ab5d8"
 *                 ruleName: "spk_rule"
 *                 apiId: "67c821d02d587653996ba828"
 *                 menuId: "67c821d02d587653996ba828"
 *                 companyId: "67c821d02d587653996ba828"
 *                 deletedAt: null
 *                 deletedBy: null
 *                 createdBy: "67c821d02d587653996ba828"
 *                 editedBy: "67c821d02d587653996ba828"
 *                 isActive: true
 *                 oldId: null
 *                 createdAt: "2025-03-05T12:09:01.390Z"
 *                 updatedAt: "2025-03-05T12:17:40.892Z"
 *                 __v: 0
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
 *               message: "An error occurred while fetching the rule."
 */