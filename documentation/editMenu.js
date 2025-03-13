/**
 * @swagger
 * /menu/editMenu:
 *   put:
 *     summary: Edit an existing menu entry
 *     description: Updates an existing menu with the specified details, including the menu ID, new menu ID, name, and client ID. Returns a success message upon successful update.
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
 *               - menuId
 *               - pageId
 *               - name
 *               - clientId
 *             properties:
 *               menuId:
 *                 type: string
 *                 description: The ID of the menu to be updated.
 *                 example: "67cac50b39d4bd37a6395e44"
 *               pageId:
 *                 type: string
 *                 description: The new page ID to save the changes under.
 *                 example: "67b037ae038ce3ffbb097924"
 *               name:
 *                 type: string
 *                 description: The new name for the menu.
 *                 example: "third"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the menu.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Menu successfully updated.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Menu is updated"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields."
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