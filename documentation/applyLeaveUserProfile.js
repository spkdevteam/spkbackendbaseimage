/**
 * @swagger
 * /users/profile/applyLeave:
 *   post:
 *     summary: Apply for leave in the user profile
 *     description: Allows a user to apply for leave by submitting the leave details.
 *     tags:
 *       - User Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "65a3b9c9e8b1a3d0a1234701"
 *               leaveType:
 *                 type: string
 *                 example: "Casual Leave"
 *               fromDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-03-15"
 *               toDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-03-16"
 *               totalDays:
 *                 type: integer
 *                 example: 2
 *               status:
 *                 type: string
 *                 example: "Pending"
 *               reason:
 *                 type: string
 *                 example: "Family function"
 *               appliedOn:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-02-28T12:00:00Z"
 *               clientId:
 *                 type: string
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Leave application created successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Leave application created successfully"
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid leave application details."
 *       404:
 *         description: Not Found - No user found for the specified client ID or user ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "User not found"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
