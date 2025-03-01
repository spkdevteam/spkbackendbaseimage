/**
 * @swagger
 * /createLeaveType:
 *   post:
 *     summary: Create a new leave type
 *     description: Creates a new leave type with the provided information.
 *     tags:
 *       - Leave Type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               leaveName:
 *                 type: string
 *                 example: "Medical Leave"
 *               leaveType:
 *                 type: string
 *                 example: "Sick Leave"
 *               companyId:
 *                 type: string
 *                 example: "65f7c0d3e5b6c70017a5e678"
 *               clientId:
 *                 type: string
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: Leave type created successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "leaveType created successfully"
 *               data: 
 *                 _id: "67c2e18aaa5f72df1cd40fcf"
 *       400:
 *         description: Bad request. Possible missing parameters or invalid input.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
