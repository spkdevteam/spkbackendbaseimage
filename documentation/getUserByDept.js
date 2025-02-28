/** 
* @swagger 
* /users/getByDept/{clientId}: 
*   get: 
*     summary: Get users by department
*     description: Retrieves a paginated list of users based on department ID, with optional search functionality.
*     tags:
*       - Authentication
*     security:
*       - BearerAuth: []
*     parameters:
*       - in: path
*         name: clientId
*         required: true
*         schema:
*           type: string
*         description: ID of the client to filter users by
*       - in: query
*         name: page
*         required: false
*         schema:
*           type: integer
*           example: 1
*         description: Page number for pagination
*       - in: query
*         name: perPage
*         required: false
*         schema:
*           type: integer
*           example: 10
*         description: Number of users per page
*       - in: query
*         name: searchKey
*         required: false
*         schema:
*           type: string
*           example: "dep001"
*         description: Search key to filter users by department ID
*     responses:
*       200:
*         description: All users fetched by department
*         content:
*           application/json:
*             example:
*               status: true
*               message: "All users fetched by department"
*               data:
*                 - _id: "65a1f9c9e8b1a3d0a1234567"
*                   firstName: "John"
*                   lastName: "Doe"
*                   email: "john.doe@example.com"
*                   phone: "1234567890"
*                   departmentId: "dep001"
*                   metaData:
*                     createdAt: "2024-02-27T10:00:00Z"
*                     updatedAt: "2024-02-27T12:00:00Z"
*                     role: "Admin"
*                     isActive: true
*                 - _id: "65a1f9c9e8b1a3d0a1234568"
*                   firstName: "Jane"
*                   lastName: "Smith"
*                   email: "jane.smith@example.com"
*                   phone: "9876543210"
*                   departmentId: "dep001"
*                   metaData:
*                     createdAt: "2024-02-26T15:30:00Z"
*                     updatedAt: "2024-02-27T09:45:00Z"
*                     role: "User"
*                     isActive: true
*       400:
*         description: Bad request, missing or invalid parameters
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Invalid request parameters"
*       401:
*         description: Unauthorized, missing or invalid token
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Unauthorized access"
*       404:
*         description: No users found for the given criteria
*         content:
*           application/json:
*             example:
*               status: false
*               message: "No users found"
*       500:
*         description: Internal server error
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Internal server error"
*/
