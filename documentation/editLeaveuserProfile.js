/**
 * @swagger
 * /users/profile/editLeave:
 *   patch:
 *     summary: Update an existing leave application in the user profile
 *     description: Allows a user to update an existing leave application by providing the updated details.
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
 *                 example: "Sick Leave"
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
 *                 example: "Fever"
 *               appliedOn:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-02-28T12:00:00Z"
 *               clientId:
 *                 type: string
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Leave application has been updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Leave application has been updated"
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid leave application details."
 *       404:
 *         description: Not Found - No leave application found for the specified user and client ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Leave application not found"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
