/**
 * @swagger
 * /api/toggleApiStatus:
 *   patch:
 *     summary: Toggle API Activation Status
 *     description: Activates or deactivates a specific API based on its current status.
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
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the API.
 *                 example: "client12345"
 *               apiId:
 *                 type: string
 *                 description: The unique API ID.
 *                 example: "api67890"
 *     responses:
 *       200:
 *         description: Successfully toggled the API status.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "API status updated successfully."
 *               data:
 *                 currentStatus: "active"
 *       404:
 *         description: API not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "API not found."
 *       400:
 *         description: Invalid input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid clientId or apiId."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while updating API status."
 */
