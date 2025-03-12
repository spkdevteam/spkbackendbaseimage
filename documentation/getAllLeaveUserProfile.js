/**
 * @swagger
 * /users/profile/getAllLeave/{clientId}/{userId}:
 *   get:
 *     summary: Fetch all leave details for a user profile
 *     description: Retrieves and displays all leave applications for a specific user under a specific client.
 *     tags:
 *       - User Profile
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The unique ID of the company associated with the user.
 *         schema:
 *           type: string
 *         example: "6788abe40db7c3b61ed93c70"
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The unique ID of the user whose leave details are to be fetched.
 *         schema:
 *           type: string
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Successfully fetched all leave details for the user.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetched all leave from a user profile"
 *               data:
 *                 - leaveType: "Casual Leave"
 *                   fromDate: "2024-03-10"
 *                   toDate: "2024-03-12"
 *                   totalDays: 3
 *                   status: "Approved"
 *                   reason: "Vacation trip"
 *                   appliedOn: "2024-02-20T09:30:00Z"
 *                 - leaveType: "Sick Leave"
 *                   fromDate: "2024-04-01"
 *                   toDate: "2024-04-03"
 *                   totalDays: 3
 *                   status: "Pending"
 *                   reason: "Fever and cold"
 *                   appliedOn: "2024-03-25T14:45:00Z"
 *                 - leaveType: "Casual Leave"
 *                   fromDate: "2024-05-05"
 *                   toDate: "2024-05-06"
 *                   totalDays: 2
 *                   status: "Rejected"
 *                   reason: "Personal work"
 *                   appliedOn: "2024-04-28T11:15:00Z"
 *               metaData:
 *                 page: 1
 *                 perPage: 10
 *                 totalData: 3
 *                 totalPages: 1
 *                 searchKey: ""
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid client ID or user ID."
 *       404:
 *         description: Not Found - No leave applications found for the specified client ID or user ID.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No leave applications found for the specified user"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
