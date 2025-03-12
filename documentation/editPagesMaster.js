/**
 * @swagger
 * /pagesMaster/editPageMaster:
 *   put:
 *     summary: Edit an existing page master entry
 *     description: Updates an existing page master entry with the provided details. Ensures that the page ID, client ID, and required fields are provided.
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
 *               - menuName
 *               - pathName
 *               - reporting
 *               - pageId
 *               - clientId
 *               - companyId
 *             properties:
 *               menuName:
 *                 type: string
 *                 description: The updated name of the menu.
 *                 example: "testMenu1Edit"
 *               pathName:
 *                 type: string
 *                 description: The updated path associated with the menu.
 *                 example: "testPathName1Edit"
 *               reporting:
 *                 type: string
 *                 description: The updated reporting information.
 *                 example: "reporting1Edit"
 *               pageId:
 *                 type: string
 *                 description: The unique identifier of the page to be edited.
 *                 example: "67d13d0dd8b65a6578781dbb"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the page.
 *                 example: "6788abe40db7c3b61ed93c70"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the page.
 *                 example: "67b0846d64170f32072bef3b"
 *     responses:
 *       200:
 *         description: Page master entry successfully updated.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Page edited successfully"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
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
