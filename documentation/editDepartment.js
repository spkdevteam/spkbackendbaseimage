/**
 * @swagger
 * /department/editOneDepartment:
 *   patch:
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
 *                 example: "67b700d7befc9b41d31eefa1"
 *               deptName:
 *                 type: string
 *                 description: The name of the department to be updated.
 *                 example: "IT"
 *               description:
 *                 type: string
 *                 description: A brief description of the department.
 *                 example: "Changing for the testing"
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
 *               message: "Department updated successfully"
 *               data:
 *                 _id: "67b700d7befc9b41d31eefa1"
 *                 deptName: "IT"
 *                 displayId: "1000013"
 *                 companyId: null
 *                 description: "Changing for the testing"
 *                 deletedAt: null
 *                 isActive: true
 *                 old_Id: null
 *                 createdBy: null
 *                 createdAt: "2025-02-20T10:15:51.415Z"
 *                 updatedAt: "2025-02-20T11:55:32.183Z"
 *                 __v: 0
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