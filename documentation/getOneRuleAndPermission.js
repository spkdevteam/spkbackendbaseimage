/**
 * @swagger
 * /rules/getOneRuleAndPermission/{id}/{clientId}:
 *   get:
 *     summary: Get a specific rule and its associated permissions
 *     description: Retrieves a specific rule and its associated permissions based on the provided rule ID and client ID.
 *     tags:
 *       - Rules Management
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the rule to be fetched.
 *         required: true
 *         schema:
 *           type: string
 *           example: "67bc2354dce421584278b549"
 *       - name: clientId
 *         in: path
 *         description: The client ID associated with the rule.
 *         required: true
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully fetched the rule and its associated permissions.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Your rule is here"
 *               data:
 *                 _id: "67bc2354dce421584278b549"
 *                 rulesName: "firstrule"
 *                 apiId: "67b32661425c6067035df2f7"
 *                 departmentId: "67b32661425c6067035df2f7"
 *                 deletedAt: null
 *                 deletedBy: null
 *                 createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                 editedBy: null
 *                 companyId: "67b32661425c6067035df2f7"
 *                 createdAt: "2025-02-24T07:44:20.891Z"
 *                 updatedAt: "2025-02-24T07:44:20.891Z"
 *                 __v: 0
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