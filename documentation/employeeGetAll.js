/**
 * @swagger
 * /employee/getAll/{clientId}:
 *   get:
 *     summary: Get All Employees
 *     description: "Fetches all employees for a given client with pagination and optional search functionality."
 *     tags:
 *       - Employee
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: "The unique client ID."
 *         example: "6788abe40db7c3b61ed93c70"
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: "The page number for pagination."
 *         example: 1
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *         description: "Number of employees per page."
 *         example: 10
 *       - in: query
 *         name: searchKey
 *         schema:
 *           type: string
 *         description: "Search keyword to filter employees."
 *         example: ""
 *     responses:
 *       200:
 *         description: "Fetched all data of employees."
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Fetched all data of employee"
 *               data:
 *                 data:
 *                   - firstName: "Alice"
 *                     lastName: "Smith"
 *                     companyId: "23456bcdef"
 *                     designationId: "78901ghijk"
 *                     joiningDate: "2021-11-03"
 *                     roleId: "manager456"
 *                     documentId: "78b9861a31234cabc089ecb12"
 *                     email: "alice.smith@example.com"
 *                     phone: "+1987654321"
 *                     gender: "Female"
 *                     age: 28
 *                     bloodGroup: "A+"
 *                     city: "Los Angeles"
 *                     state: "California"
 *                     country: "USA"
 *                     ZipCode: "90001"
 *                     address: "5678 Maple Avenue, Apt 202"
 *                     isVerified: true
 *                     isActive: true
 *                     createdAt: "2021-11-03T10:15:30Z"
 *                     updatedAt: "2023-01-10T14:45:20Z"
 *                 metaData:
 *                   currentPage: 1
 *                   perPage: 10
 *                   searchKey: ""
 *                   totalData: 5
 *                   totalPages: 1
 *       400:
 *         description: "Invalid request or missing required fields."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data."
 *       404:
 *         description: "No employees found."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No employees found."
 *       500:
 *         description: "Internal server error."
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */