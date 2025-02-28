/**
 * @swagger
 * /demoDuties/editOneDutyAndResponsibility/:
 *   patch:
 *     summary: Edit a duty and responsibility
 *     description: This API updates the details of an existing duty and responsibility with the provided information.
 *     tags:
 *       - Duties
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deptName:
 *                 type: string
 *                 description: The name of the department for the duty.
 *                 example: "demoDept"
 *               designation:
 *                 type: string
 *                 description: The designation associated with the duty.
 *                 example: "deptDesignation"
 *               rules:
 *                 type: string
 *                 description: The rules applicable to the duty.
 *                 example: "demoRule"
 *               documents:
 *                 type: string
 *                 description: The documents associated with the duty.
 *                 example: "demoDoc"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the duty.
 *                 example: "demoCompanyId"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the duty.
 *                 example: "demoClientId"
 *             required:
 *               - deptName
 *               - designation
 *               - rules
 *               - documents
 *               - companyId
 *               - clientId
 *     responses:
 *       200:
 *         description: Duty and responsibility updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Updated successfully."
 *       400:
 *         description: Bad request. Missing or invalid data.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request body."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */