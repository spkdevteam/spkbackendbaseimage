/**
 * @swagger
 * /designation/createDesignation:
 *   post:
 *     summary: Create a new designation
 *     description: Creates a new designation entry with the provided details. Ensures that all required fields are provided and stores the designation under the given client ID.
 *     tags:
 *       - Designation Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - designationName
 *               - clientId
 *             properties:
 *               designationName:
 *                 type: string
 *                 description: The name of the designation to be created.
 *                 example: "Administrator"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the designation.
 *                 example: "67b037f8038ce3ffbb09792d"
 *               shortName:
 *                 type: string
 *                 description: The short name or abbreviation for the designation.
 *                 example: "admin"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the designation.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       201:
 *         description: Designation successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Designation created successfully"
 *               data:
 *                 displayId: "0"
 *                 designationName: "Administrator"
 *                 shortName: "admin"
 *                 companyId: "67b037f8038ce3ffbb09792d"
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 editedBy: null
 *                 deletedBy: null
 *                 deletedAt: null
 *                 oldId: null
 *                 isActive: true
 *                 _id: "67cbe23636344733e25e2d70"
 *                 createdAt: "2025-03-08T06:22:46.069Z"
 *                 updatedAt: "2025-03-08T06:22:46.069Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
 *       409:
 *         description: Conflict, designation already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Designation already exists."
 *       401:
 *         description: Unauthorized, missing or invalid token.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Unauthorized access."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */