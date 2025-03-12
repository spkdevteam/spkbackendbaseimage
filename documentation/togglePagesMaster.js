/**
 * @swagger
 * /pagesMaster/togglePageMaster:
 *   patch:
 *     summary: Toggle the status of a page master entry
 *     description: Toggles the status of an existing page master entry based on the provided page ID and client ID.
 *     tags:
 *       - Pages Master Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - pageId
 *               - clientId
 *             properties:
 *               pageId:
 *                 type: string
 *                 description: The unique identifier of the page to be toggled.
 *                 example: "67d11656835ef4b66de9389d"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the page.
 *                 example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Page master entry status successfully toggled.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Page toggled successfully"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid parameters or missing data."
 *       404:
 *         description: Not found, page master entry does not exist.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Page master entry not found."
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