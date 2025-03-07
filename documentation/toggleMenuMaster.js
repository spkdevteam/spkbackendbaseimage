/**
 * @swagger
 * /menu/toggleMenu:
 *   patch:
 *     summary: Toggle menu status
 *     description: Toggles the status (active/inactive) of a specific menu for a given `menuId` and `clientId`.
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
 *               - clientId
 *             properties:
 *               menuId:
 *                 type: string
 *                 description: The unique identifier of the menu to toggle.
 *                 example: "67cadf78dca46ced36a2f05b"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the menu.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Successfully toggled the menu status.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully toggled the menu status"
 *       400:
 *         description: Invalid request data or missing fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request data or missing fields."
 *       404:
 *         description: Menu not found for the given `menuId` and `clientId`.
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