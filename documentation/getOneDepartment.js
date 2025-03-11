/**
 * @swagger
 * /department/getOneDepartment/{id}/{clientId}:
 *   get:
 *     summary: Get a department by ID and client ID
 *     description: Fetches a department based on the provided department ID and client ID.
 *     tags:
 *       - Department Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the department to be fetched.
 *         schema:
 *           type: string
 *           example: "67d05dbbf80b6ff94ed5f31e"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the department.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Department found successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User is here"
 *               data:
 *                 _id: "67d05dbbf80b6ff94ed5f31e"
 *                 deptName: "Admins"
 *                 displayId: "0"
 *                 companyId: "67b037ae038ce3ffbb097924"
 *                 description: "Demo admin department."
 *                 deletedAt: null
 *                 isActive: true
 *                 old_Id: null
 *                 shift:
 *                   - "60b8d295fbd85c6e3b4f95f8"
 *                   - "60b8d295fbd85c6e3b4f95f9"
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 createdAt: "2025-03-11T07:17:26.204Z"
 *                 updatedAt: "2025-03-11T09:49:47.660Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or missing required parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required parameters or invalid data."
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
