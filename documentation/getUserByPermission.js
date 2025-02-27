/**
 * @swagger
 * /users/getByPermission/{clientId}:
 *   get:
 *     summary: Get users by permission
 *     description: Fetch all users based on their assigned permissions.
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
 *         description: The client ID
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: perPage
 *         required: false
 *         schema:
 *           type: integer
 *         description: Number of users per page
 *       - in: query
 *         name: searchKey
 *         required: false
 *         schema:
 *           type: string
 *         description: Search keyword
 *     responses:
 *       200:
 *         description: Users fetched by permission
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "User fetched by permission"
 *               data:
 *                 - _id: "65a2b7c9e8b1a3d0a1234601"
 *                   firstName: "Emma"
 *                   lastName: "Johnson"
 *                   email: "emma.johnson@example.com"
 *                   phone: "1112223333"
 *                   permissions: ["create", "update"]
 *                 - _id: "65a2b7c9e8b1a3d0a1234602"
 *                   firstName: "Liam"
 *                   lastName: "Miller"
 *                   email: "liam.miller@example.com"
 *                   phone: "2223334444"
 *                   permissions: "delete"
 *                 - _id: "65a2b7c9e8b1a3d0a1234603"
 *                   firstName: "Sophia"
 *                   lastName: "Anderson"
 *                   email: "sophia.anderson@example.com"
 *                   phone: "3334445555"
 *                   permissions: "create"
 *                 - _id: "65a2b7c9e8b1a3d0a1234604"
 *                   firstName: "Noah"
 *                   lastName: "Williams"
 *                   email: "noah.williams@example.com"
 *                   phone: "4445556666"
 *                   permissions: "update"
 *                 - _id: "65a2b7c9e8b1a3d0a1234605"
 *                   firstName: "Olivia"
 *                   lastName: "Brown"
 *                   email: "olivia.brown@example.com"
 *                   phone: "5556667777"
 *                   permissions: "create"
 *               metaData:
 *                 page: 1
 *                 perPage: 5
 *                 searchKey: ""
 *                 totalData: 5
 *                 totalPages: 1
 *       400:
 *         description: Bad request, missing parameters or validation error
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
