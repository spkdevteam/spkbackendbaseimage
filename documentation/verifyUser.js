/**
 * @swagger
 * /isVerify:
 *   patch:
 *     summary: Verify user if no pending documents
 *     description: Updates the `isVerify` field to true if the user has no pending documents.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "65a3f9c9e8b1a3d0a1234702"
 *               companyId:
 *                 type: string
 *                 example: "67b037ae038ce3ffbb097924"
 *               firstName:
 *                 type: string
 *                 example: "Jane"
 *               lastName:
 *                 type: string
 *                 example: "Smith"
 *               email:
 *                 type: string
 *                 example: "jane.smith@example.com"
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               clientId:
 *                 type: string
 *                 example: "6788abe40db7c3b61ed93c70"
 *               isVerify:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: User verified successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User verified successfully"
 *       400:
 *         description: Bad request. Possible missing parameters or invalid input.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data"
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
