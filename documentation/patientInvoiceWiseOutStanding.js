/**
 * @swagger
 * /transactions/invoiceWiseOutStanding/{clientId}/{patientId}:
 *   get:
 *     summary: Retrieve invoice-wise outstanding details
 *     description: Fetches the outstanding and paid details of invoices for a specific patient and client.
 *     tags:
 *       - Transactions
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the client.
 *         example: "client12345"
 *       - in: path
 *         name: patientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the patient.
 *         example: "patient67890"
 *     responses:
 *       200:
 *         description: Successfully retrieved outstanding invoice details.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Data found"
 *               data:
 *                 invoiceId: "IV00001"
 *                 payableDetails:
 *                   - total: 2500
 *                     discount: 500
 *                     net: 2000
 *                 paidDetails:
 *                   - transactionId: "tr00001"
 *                     amount: 500
 *                     date: "02/05/2025"
 *                     paymentMode: "Cash"
 *                   - transactionId: "tr00002"
 *                     amount: 500
 *                     date: "03/05/2025"
 *                     paymentMode: "Cash"
 *       400:
 *         description: Invalid or missing parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input. Missing required parameters."
 *       404:
 *         description: No outstanding details found for the given client and patient.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No outstanding invoices found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
