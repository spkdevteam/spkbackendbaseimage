/**
 * @swagger
 * /demoDuties/getOneDutyAndResponsibility/{id}/{companyId}/{clientId}:
 *   get:
 *     summary: Get a specific duty and responsibility
 *     description: This API retrieves the details of a specific duty and responsibility by its ID and the associated client ID.
 *     tags:
 *       - Duties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the duty.
 *         schema:
 *           type: string
 *           example: "123456"
 *       - in: path
 *         name: companyId
 *         required: true
 *         description: The company ID associated with the duty.
 *         schema:
 *           type: string
 *           example: "exampleCompanyId"
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The client ID associated with the duty.
 *         schema:
 *           type: string
 *           example: "exampleClientId"
 *     responses:
 *       200:
 *         description: Duty and responsibility retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Here is the duty."
 *               data:
 *                 dutyId: "123456"
 *                 companyId: "exampleCompanyId"
 *                 deptName: "demoDepartment"
 *                 designation: "demoDesignation"
 *                 rules: "demoRule"
 *                 documents: "demoDescription"
 *       400:
 *         description: Bad request. Missing or invalid parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */