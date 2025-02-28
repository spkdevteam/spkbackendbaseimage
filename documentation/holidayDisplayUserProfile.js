/**
 * @swagger
 * /users/profile/displayHoliday/{clientId}/{userId}:
 *   get:
 *     summary: Display holiday details in user profile
 *     description: Retrieves and displays the holiday details for a specific user.
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
 *         description: The unique ID of the user whose holiday details are to be displayed.
 *         schema:
 *           type: string
 *         example: "65a3b9c9e8b1a3d0a1234701"
 *     responses:
 *       200:
 *         description: Successfully displayed holiday details for the user.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Display Holiday in user profile"
 *               data:
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 profileImage: "https://example.com/images/john_doe.jpg"
 *                 role:
 *                   roleId: "67b5d42ff2d3779fb1108155"
 *                   role: "Employee"
 *                 department: "Software Development"
 *                 holidays:
 *                   - date: "2024-01-01"
 *                     day: "Monday"
 *                     holidayName: "New Year's Day"
 *                     description: "Celebration of the beginning of the new year."
 *                   - date: "2024-03-29"
 *                     day: "Friday"
 *                     holidayName: "Good Friday"
 *                     description: "Christian holiday commemorating the crucifixion of Jesus."
 *                   - date: "2024-07-04"
 *                     day: "Thursday"
 *                     holidayName: "Independence Day"
 *                     description: "Celebration of national independence."
 *                   - date: "2024-12-25"
 *                     day: "Wednesday"
 *                     holidayName: "Christmas Day"
 *                     description: "Celebration of the birth of Jesus Christ."
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
