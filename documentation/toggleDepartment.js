/**
 * @swagger
 * /department/toggleDepartment:
 *   patch:
 *     summary: Toggle the status of a department
 *     description: Toggles the active status of the department based on the provided client ID and department ID.
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
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the department.
 *                 example: "6788abe40db7c3b61ed93c70"
 *               departmentId:
 *                 type: string
 *                 description: The department ID whose status needs to be toggled.
 *                 example: "67d05dbbf80b6ff94ed5f31e"
 *     responses:
 *       200:
 *         description: Department status toggled successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Department toggled successfully"
 *       400:
 *         description: Validation error or missing required parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required parameters or invalid data."
 *       404:
 *         description: Department not found or does not exist.
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
