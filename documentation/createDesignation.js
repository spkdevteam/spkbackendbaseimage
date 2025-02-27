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
 *               - title
 *               - clientId
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the designation to be created.
 *                 example: "Developer"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the designation.
 *                 example: "6788abe40db7c3b61ed93c70"
 *               shortName:
 *                 type: string
 *                 description: The short name or abbreviation for the designation.
 *                 example: "dev"
 *               isActive:
 *                 type: string
 *                 description: Whether the designation is active or not.
 *                 example: "true"
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
 *                 title: "Developer"
 *                 shortName: "dev"
 *                 displayId: "1000011"
 *                 createdBy: null
 *                 deletedAt: null
 *                 isActive: true
 *                 _id: "67b805eac722d5f018e4f688"
 *                 createdAt: "2025-02-21T04:49:46.577Z"
 *                 updatedAt: "2025-02-21T04:49:46.577Z"
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