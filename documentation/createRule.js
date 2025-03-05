/**
 * @swagger
 * /rules/createRule:
 *   post:
 *     summary: Create a new rule entry
 *     description: Saves a new rule entry by verifying provided information like user, API, menu, and company IDs. Also ensures valid client ID and updates rule data.
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
 *               - userId
 *               - ruleName
 *               - apiId
 *               - menuId
 *               - companyId
 *               - clientId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique identifier of the user.
 *                 example: "67c821d02d587653996ba828"
 *               ruleName:
 *                 type: string
 *                 description: The name of the rule being created.
 *                 example: "newRule"
 *               apiId:
 *                 type: string
 *                 description: The unique identifier of the associated API.
 *                 example: "67c821d02d587653996ba828"
 *               menuId:
 *                 type: string
 *                 description: The unique identifier of the associated menu.
 *                 example: "67c821d02d587653996ba828"
 *               companyId:
 *                 type: string
 *                 description: The unique identifier of the company.
 *                 example: "67c821d02d587653996ba828"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the rule.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: Rule successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Rule successfully saved"
 *               data:
 *                 ruleName: "newRule"
 *                 apiId: "67c821d02d587653996ba828"
 *                 menuId: "67c821d02d587653996ba828"
 *                 companyId: "67c821d02d587653996ba838"
 *                 deletedAt: null
 *                 deletedBy: null
 *                 createdBy: "67c821d02d587653996ba828"
 *                 editedBy: null
 *                 isActive: true
 *                 oldId: null
 *                 _id: "67c8369eaf59d1b7f459c31a"
 *                 createdAt: "2025-03-05T11:33:50.013Z"
 *                 updatedAt: "2025-03-05T11:33:50.013Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User ID, ruleName, apiId, menuId, companyId, or clientId is missing."
 *       409:
 *         description: Conflict, rule already exists for the provided parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Rule with the given parameters already exists."
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