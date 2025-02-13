/**
 * @swagger
 * /api/EditAPI:
 *   put:
 *     summary: Edit an existing API entry
 *     description: Updates an API's details using `_id`, `name`, and `clientID`. Ensures the API exists before updating.
 *     tags:
 *       - API Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - _id
 *               - name
 *               - clientID
 *             properties:
 *               _id:
 *                 type: string
 *                 description: The unique identifier of the API.
 *                 example: "api67890"
 *               name:
 *                 type: string
 *                 description: The new name of the API.
 *                 example: "Updated API Name"
 *               clientID:
 *                 type: string
 *                 description: The client ID associated with the API.
 *                 example: "client12345"
 *     responses:
 *       200:
 *         description: API successfully updated.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "API updated successfully."
 *       404:
 *         description: API not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No record found for the provided API ID."
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input data."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while updating the API."
 */
