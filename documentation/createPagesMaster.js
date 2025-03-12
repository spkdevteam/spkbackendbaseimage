/**
 * @swagger
 * /pagesMaster/createPageMaster:
 *   post:
 *     summary: Create a new page master entry
 *     description: Creates a new page master entry with the provided details. Ensures that all required fields are provided and stores the entry under the given client ID.
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
 *               - clientId
 *               - companyId
 *             properties:
 *               menuName:
 *                 type: string
 *                 description: The name of the menu to be created.
 *                 example: "testMenu1"
 *               pathName:
 *                 type: string
 *                 description: The path associated with the menu.
 *                 example: "testPathName1"
 *               reporting:
 *                 type: string
 *                 description: The reporting information related to the menu.
 *                 example: "reporting1"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the page.
 *                 example: "6788abe40db7c3b61ed93c70"
 *               companyId:
 *                 type: string
 *                 description: The company ID associated with the page.
 *                 example: "67b04146e8875393e56abbd6"
 *     responses:
 *       201:
 *         description: Page master entry successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Page created successfully"
 *               data: "67d13d0dd8b65a6578781dbb"
 *       400:
 *         description: Validation error or missing required fields.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Missing required fields or invalid data."
 *       409:
 *         description: Conflict, page master entry already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Page master entry already exists."
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
