/**
 * @swagger
 * /menu/createMenu:
 *   post:
 *     summary: Create a new menu entry
 *     description: Adds a new menu entry with the specified details, including the name, menu ID, company ID, and client ID. Returns a success message upon successful creation.
 *     tags:
 *       - Menu Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - menuId
 *               - companyId
 *               - clientId
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the menu being created.
 *                 example: "first"
 *               menuId:
 *                 type: string
 *                 description: The ID of the menu.
 *                 example: "67b037ae038ce3ffbb097924"
 *               companyId:
 *                 type: string
 *                 description: The ID of the company to which the menu belongs.
 *                 example: "67b037f8038ce3ffbb09792d"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the menu.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Menu successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Menu added successfully"
 *               data:
 *                 name: "first"
 *                 menuId: "67b037ae038ce3ffbb097924"
 *                 companyId: "67b037f8038ce3ffbb09792d"
 *                 isActive: true
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 deletedAt: null
 *                 oldId: null
 *                 _id: "67cac338e3a8ce2d848e0652"
 *                 createdAt: "2025-03-07T09:58:16.830Z"
 *                 updatedAt: "2025-03-07T09:58:16.830Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields."
 *       409:
 *         description: Conflict, menu already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Menu already exists."
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