/**
 * @swagger
 * /users/getByRole/{companyId}/{roleId}:
 *   get:
 *     summary: Fetch users by role ID
 *     description: Retrieves a list of users associated with a specific role within a company.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - name: companyId
 *         in: path
 *         required: true
 *         description: The unique ID of the company.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *       - name: roleId
 *         in: path
 *         required: true
 *         description: The unique ID of the role.
 *         schema:
 *           type: string
 *           example: "67b479b8bbd1da4b4d52ca19"
 *       - name: page
 *         in: query
 *         required: false
 *         description: The page number for pagination.
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: query
 *         required: false
 *         description: The number of users per page.
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: searchKey
 *         in: query
 *         required: false
 *         description: Search keyword for filtering users.
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Successfully fetched users by role ID.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "All user fetched by roleId"
 *               data:
 *                 - _id: "65a2b7c9e8b1a3d0a1234601"
 *                   firstName: "Emma"
 *                   lastName: "Johnson"
 *                   email: "emma.johnson@example.com"
 *                   phone: "1112223333"
 *                   roleId: "67b479b8bbd1da4b4d52ca19"
 *                 - _id: "65a2b7c9e8b1a3d0a1234602"
 *                   firstName: "Liam"
 *                   lastName: "Miller"
 *                   email: "liam.miller@example.com"
 *                   phone: "2223334444"
 *                   roleId: "67b479b8bbd1da4b4d52ca19"
 *                 - _id: "65a2b7c9e8b1a3d0a1234603"
 *                   firstName: "Sophia"
 *                   lastName: "Anderson"
 *                   email: "sophia.anderson@example.com"
 *                   phone: "3334445555"
 *                   roleId: "67b479b8bbd1da4b4d52ca19"
 *                 - _id: "65a2b7c9e8b1a3d0a1234604"
 *                   firstName: "Noah"
 *                   lastName: "Williams"
 *                   email: "noah.williams@example.com"
 *                   phone: "4445556666"
 *                   roleId: "67b479b8bbd1da4b4d52ca19"
 *                 - _id: "65a2b7c9e8b1a3d0a1234605"
 *                   firstName: "Olivia"
 *                   lastName: "Brown"
 *                   email: "olivia.brown@example.com"
 *                   phone: "5556667777"
 *                   roleId: "67b479b8bbd1da4b4d52ca19"
 *               metaData:
 *                 page: 1
 *                 perPage: 5
 *                 searchKey: ""
 *                 totalData: 5
 *                 totalPages: 1
 *       400:
 *         description: Bad Request - Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters"
 *       404:
 *         description: Not Found - Role or Company not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Role or Company not found"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error"
 */
