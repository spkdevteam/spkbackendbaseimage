/**
 * @swagger
 * /demoDuties/createDuty:
 *   post:
 *     summary: Create a new duty
 *     description: This API creates a new duty entry with detailed information about the department, designation, rules, and documents.
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
 *                 example: "exampleDeptName"
 *               designation:
 *                 type: string
 *                 description: The designation associated with the duty.
 *                 example: "exampleDesignation"
 *               rules:
 *                 type: string
 *                 description: The rules applicable to the duty.
 *                 example: "exampleRules"
 *               documents:
 *                 type: string
 *                 description: The documents associated with the duty.
 *                 example: "exampleDocuments"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the duty.
 *                 example: "examplecompanyId"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the duty.
 *                 example: "exampleClientId"
 *             required:
 *               - deptName
 *               - designation
 *               - rules
 *               - documents
 *               - clientId
 *     responses:
 *       200:
 *         description: Duty created successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "New duty created"
 *               data:
 *                 _id: "67b037ae038ce3ffbb097924"
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