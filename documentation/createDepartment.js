/**
 * @swagger
 * /dept/createDept:
 *   post:
 *     summary: Create a new department
 *     description: Creates a new department entry with the provided details. Ensures that all required fields are provided and stores the department under the given client ID.
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
 *               - clientId
 *             properties:
 *               deptName:
 *                 type: string
 *                 description: The name of the department to be created.
 *                 example: "IT"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the department.
 *                 example: "6788abe40db7c3b61ed93c70"
 *               reportingDept:
 *                 type: string
 *                 description: The department to which the new department reports.
 *                 example: "admin"
 *               description:
 *                 type: string
 *                 description: A brief description of the department.
 *                 example: "Information Technology"
 *               isActive:
 *                 type: string
 *                 description: Whether the department is active or not.
 *                 example: "true"
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
 *                 deptName: "IT"
 *                 displayId: "1000010"
 *                 companyId: null
 *                 description: "Information Technology"
 *                 deletedAt: null
 *                 isActive: true
 *                 old_Id: null
 *                 createdBy: null
 *                 _id: "67b6f6fa8f963fae8ff8d165"
 *                 createdAt: "2025-02-20T09:33:46.385Z"
 *                 updatedAt: "2025-02-20T09:33:46.385Z"
 *                 __v: 0
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