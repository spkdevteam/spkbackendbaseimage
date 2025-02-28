/**
 * @swagger
 * /demoRoles/createRole:
 *   post:
 *     summary: Create a new role
 *     description: Creates a new role entry with the provided details. Ensures that all required fields are provided and stores the role under the given client ID.
 *     tags:
 *       - Role Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - designationId
 *               - departmentId
 *               - companyId  # Added companyId here before clientId
 *               - clientId
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the role to be created.
 *                 example: "john"
 *               companyId:  # Added companyId before clientId in request body
 *                 type: string
 *                 description: The company ID associated with the role.
 *                 example: "6788abe40db7c3b61ed93c70"
 *               designationId:
 *                 type: string
 *                 description: The designation ID associated with the role.
 *                 example: "jr. developer"
 *               departmentId:
 *                 type: string
 *                 description: The department ID associated with the role.
 *                 example: "dev"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the role.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: Role successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Role is created successfully."
 *               data:
 *                 roleId: "67b32661425c6067035df2f7"
 *                 companyId: "6788abe40db7c3b61ed93c70"  # Added companyId here after roleId in response
 *                 name: "john"
 *                 designationId: "jr. developer"
 *                 departmentId: "dev"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
 *       409:
 *         description: Conflict, role already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Role already exists."
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