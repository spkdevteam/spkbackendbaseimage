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
 *           example: "67d00c2600a85f9e3acb78ce"
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
 *                 _id: "67d00c2600a85f9e3acb78ce"
 *                 name: "first1"
 *                 pageId: "67b037ae038ce3ffbb097924"
 *                 companyId: "67b037f8038ce3ffbb09792d"
 *                 isActive: true
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 deletedAt: null
 *                 oldId: null
 *                 createdAt: "2025-03-11T10:10:46.910Z"
 *                 updatedAt: "2025-03-11T10:11:10.675Z"
 *                 __v: 0
 *                 editedBy: "67c944517f8fcf7d12e92f1d"
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