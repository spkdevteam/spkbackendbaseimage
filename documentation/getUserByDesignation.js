/** 
* @swagger 
* /users/getByDesignation/{clientId}/{designationId}: 
*   get: 
*     summary: Get users by designation
*     description: Retrieves users based on their designation ID, with pagination and optional search functionality.
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
*         description: Associated client ID
*       - in: path
*         name: designationId
*         required: true
*         schema:
*           type: string
*         description: Designation ID
*       - in: query
*         name: page
*         schema:
*           type: integer
*         description: Page number for pagination
*         example: 1
*       - in: query
*         name: perPage
*         schema:
*           type: integer
*         description: Number of records per page
*         example: 10
*       - in: query
*         name: searchKey
*         schema:
*           type: string
*         description: Optional search keyword
*         example: ""
*     responses:
*       200:
*         description: Users fetched by their designation ID
*         content:
*           application/json:
*             example:
*               status: true
*               message: "Users fetched by their designationId"
*               data:
*                 - _id: "65a1f9c9e8b1a3d0a1234503"
*                   firstName: "Alice"
*                   lastName: "Brown"
*                   email: "alice.brown@example.com"
*                   phone: "5555555555"
*                   designationId: "67bfe36f432869b6ca271bf7"
*                 - _id: "65a1f9c9e8b1a3d0a1234504"
*                   firstName: "Bob"
*                   lastName: "Wilson"
*                   email: "bob.wilson@example.com"
*                   phone: "4444444444"
*                   designationId: "67bfe36f432869b6ca271bf7"
*               metaData:
*                 page: 1
*                 perPage: 5
*                 searchKey: ""
*                 totalData: 12
*                 totalPages: 3
*       400:
*         description: Invalid request parameters
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Invalid parameters provided"
*       401:
*         description: Unauthorized, missing or invalid token
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Unauthorized access"
*       404:
*         description: No users found for the given designation
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
