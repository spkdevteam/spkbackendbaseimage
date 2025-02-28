/**
 * @swagger
 * /users/profile/displayAttendance/{clientId}/{userId}:
 *   get:
 *     summary: Display attendance for the user
 *     description: Retrieves and displays the attendance details for a specific user.
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
 *         description: The unique ID of the user whose attendance details are to be displayed.
 *         schema:
 *           type: string
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Successfully displayed attendance for the user.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Display attendance for the user"
 *               data:
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 profileImage: "https://example.com/images/john_doe.jpg"
 *                 role:
 *                   roleId: "67b5d42ff2d3779fb1108155"
 *                   role: "Employee"
 *                 department: "Software Development"
 *                 attendance:
 *                   - date: "2024-02-01"
 *                     checkIn: "09:05 AM"
 *                     checkOut: "06:15 PM"
 *                     status: "Present"
 *                   - date: "2024-02-02"
 *                     checkIn: "09:12 AM"
 *                     checkOut: "06:10 PM"
 *                     status: "Present"
 *                   - date: "2024-02-03"
 *                     checkIn: null
 *                     checkOut: null
 *                     status: "Absent"
 *                   - date: "2024-02-04"
 *                     checkIn: "09:00 AM"
 *                     checkOut: "12:00 PM"
 *                     status: "Half Day"
 *                   - date: "2024-02-05"
 *                     checkIn: "09:10 AM"
 *                     checkOut: "06:20 PM"
 *                     status: "Present"
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid client ID or user ID."
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
