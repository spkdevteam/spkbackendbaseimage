/**
 * @swagger
 * /menu/deleteMenu/{menuId}/{clientId}:
 *   delete:
 *     summary: Delete an existing menu entry
 *     description: Deletes a menu based on the specified `menuId` and `clientId`. Returns a success message upon successful deletion.
 *     tags:
 *       - Menu Management
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: menuId
 *         in: path
 *         required: true
 *         description: The ID of the menu to be deleted.
 *         schema:
 *           type: string
 *           example: "67cac50b39d4bd37a6395e44"
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the menu.
 *         schema:
 *           type: string
 *           example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Menu successfully deleted.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Menu deleted successfully"
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