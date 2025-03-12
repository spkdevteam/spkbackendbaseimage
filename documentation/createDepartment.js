/**
 * @swagger
 * /department/createDept:
 *   post:
 *     summary: Create a new department
 *     description: Creates a new department entry with the provided details, such as department name, company ID, description, and shift IDs where shift Id will be an array of shift ids.
 *     tags:
 *       - Department Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deptName
 *               - displayId
 *               - companyId
 *               - description
 *               - clientId
 *             properties:
 *               deptName:
 *                 type: string
 *                 description: The name of the department to be created.
 *                 example: "Admin"
 *               displayId:
 *                 type: string
 *                 description: The unique display ID for the department.
 *                 example: "10000"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the department.
 *                 example: "67b037ae038ce3ffbb097924"
 *               description:
 *                 type: string
 *                 description: A brief description of the department.
 *                 example: "Demo admin department."
 *               isActive:
 *                 type: boolean
 *                 description: Whether the department is active or not.
 *                 example: true
 *               old_Id:
 *                 type: string
 *                 description: A legacy identifier for the department, if applicable.
 *                 example: null
 *               shift:
 *                 type: array
 *                 description: The IDs of the shifts associated with the department.
 *                 items:
 *                   type: string
 *                   description: The ID of a shift associated with the department.
 *                   example: "60b8d295fbd85c6e3b4f95f8"
 *               deletedAt:
 *                 type: string
 *                 description: Timestamp indicating when the department was deleted, if applicable.
 *                 example: null
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the department.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: Department successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "New department is created"
 *               data:
 *                 _id: "67d022771b42cb00789b98a9"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
 *       409:
 *         description: Conflict, department already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Department already exists."
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
