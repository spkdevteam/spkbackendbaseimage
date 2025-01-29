/**
 * @swagger
 * /transaction/deleteTransaction/{clientId}/{transactionId}:
 *   delete:
 *     summary: Delete a specific transaction
 *     description: Deletes a transaction based on the provided `clientId` and `transactionId`.
 *     tags:
 *       - Transactions
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The unique ID of the client associated with the transaction.
 *         schema:
 *           type: string
 *           example: "objClientId000002"
 *       - name: transactionId
 *         in: path
 *         required: true
 *         description: The unique ID of the transaction to be deleted.
 *         schema:
 *           type: string
 *           example: "objTransId000001"
 *     responses:
 *       200:
 *         description: Transaction deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Transaction deleted successfully."
 *       400:
 *         description: Bad request. Missing or invalid parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid clientId or transactionId."
 *       404:
 *         description: Transaction not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Transaction not found for the provided clientId and transactionId."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
