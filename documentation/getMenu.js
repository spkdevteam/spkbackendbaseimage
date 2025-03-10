/**
 * @swagger
 * /menu/getMenu/{menuId}/{clientId}:
 *   get:
 *     summary: Get a menu entry
 *     description: Retrieves a menu based on the specified `menuId` and `clientId`. Returns the menu details if found.
 *     tags:
 *       - Menu Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: menuId
 *         in: path
 *         required: true
 *         description: The ID of the menu to be retrieved.
 *         schema:
 *           type: string
 *           example: "67cac338e3a8ce2d848e0652"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the menu.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Menu successfully retrieved.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Menu fetched successfully"
 *               data:
 *                 _id: "67cac338e3a8ce2d848e0652"
 *                 name: "first"
 *                 menuId: "67b037ae038ce3ffbb097924"
 *                 companyId: "67b037f8038ce3ffbb09792d"
 *                 isActive: true
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 deletedAt: null
 *                 oldId: null
 *                 createdAt: "2025-03-07T09:58:16.830Z"
 *                 updatedAt: "2025-03-07T09:58:16.830Z"
 *                 __v: 0
 *       400:
 *         description: Validation error or invalid parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid menuId or clientId."
 *       404:
 *         description: Menu not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Menu not found."
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