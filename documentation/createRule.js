/**
 * @swagger
 * /rules/CreateRule:
 *   post:
 *     summary: Create a new rule and assign permissions
 *     description: Creates a new rule with the specified name, associated API, department, and branch.
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
 *               rulesName:
 *                 type: string
 *                 description: The name of the rule.
 *                 example: "AdminAccess"
 *               apiId:
 *                 type: string
 *                 description: The unique identifier of the API.
 *                 example: "api12345"
 *               departMentId:
 *                 type: string
 *                 description: The unique identifier of the department.
 *                 example: "dept67890"
 *               branchId:
 *                 type: string
 *                 description: The unique identifier of the branch.
 *                 example: "branch54321"
 *     responses:
 *       201:
 *         description: Rule created successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Rule created successfully."
 *               data:
 *                 _id: "rule98765"
 *                 branchId: "branch54321"
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
 *               message: "An error occurred while creating the rule."
 */
