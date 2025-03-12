/**
 * @swagger
 * /department/editOneDepartment:
 *   put:
 *     summary: Update an existing department
 *     description: Updates the department details based on the provided department ID and client ID.
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
 *               - id
 *               - deptName
 *               - clientId
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the department to be updated.
 *                 example: "67d05dbbf80b6ff94ed5f31e"
 *               deptName:
 *                 type: string
 *                 description: The name of the department to be updated.
 *                 example: "Adminssssss"
 *               displayId:
 *                 type: string
 *                 description: The display ID of the department.
 *                 example: "10000"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the department.
 *                 example: "67b037ae038ce3ffbb097924"
 *               description:
 *                 type: string
 *                 description: A brief description of the department.
 *                 example: "Demo admin department."
 *               deletedAt:
 *                 type: string
 *                 description: The deletion timestamp of the department if it was deleted.
 *                 example: null
 *               isActive:
 *                 type: boolean
 *                 description: Whether the department is active.
 *                 example: true
 *               old_Id:
 *                 type: string
 *                 description: The old department ID, if applicable.
 *                 example: null
 *               shift:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The list of shift IDs associated with the department.
 *                 example:
 *                   - "60b8d295fbd85c6e3b4f95f8"
 *                   - "60b8d295fbd85c6e3b4f95f8"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the department.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Department updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Department updated successfully."
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
 *       404:
 *         description: Department not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Department not found."
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
