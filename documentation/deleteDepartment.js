/**
 * @swagger
 * /department/deleteDepartment/{id}/{clientId}:
 *   delete:
 *     summary: Delete a department
 *     description: Deletes a department based on the provided department ID and client ID once deleted you cannot delete it again.
 *     tags:
 *       - Department Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the department to be deleted.
 *         schema:
 *           type: string
 *           example: "67d11719ae90d6f35ef3ea04"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the department.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Department successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Department is deleted"
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
