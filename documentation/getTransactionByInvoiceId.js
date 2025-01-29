/**
 * @swagger
 * /transaction/getInvoiceTransactions/{clientId}/{invoiceId}:
 *   get:
 *     summary: Get Invoice-Based Settlement Details
 *     description: |
 *       This API endpoint retrieves the settlement details for a given client and invoice.
 *       The response includes transaction history, total amount, paid amount, and closing balance.
 *     tags:
 *       - Transactions
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the invoice settlement.
 *         schema:
 *           type: string
 *           example: "objCompId000001"
 *       - name: invoiceId
 *         in: path
 *         required: true
 *         description: The unique invoice ID for the settlement.
 *         schema:
 *           type: string
 *           example: "ObjInvoice00001"
 *     responses:
 *       200:
 *         description: Successful response containing the invoice settlement details.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Entry deleted successfully"
 *               data:
 *                 totalAmount: 750.00
 *                 closingBalance: 300
 *                 paidAmount: 450
 *                 totalTransaction: 2
 *                 invoiceId: "ObjInvoice00001"
 *                 transactions:
 *                   - transactionId: "objTransId000001"
 *                     companyId: "objCompId000001"
 *                     accountHead: "objaccntHeadId0001"
 *                     branchId: "objBranchId000001"
 *                     partyId: "objClientId000002"
 *                     date: "2025-01-23"
 *                     autoNarration: "Paid electricity bill"
 *                     narration: "Payment for January electricity bill"
 *                     amount: 750
 *                     type: "credit"
 *                     clientId: ""
 *                     _id: "tempId001"
 *                     b2bDetails:
 *                       - invoiceId: "ObjInvoice00001"
 *                         amount: 500
 *                       - invoiceId: "ObjInvoice00002"
 *                         amount: 250
 *                   - transactionId: "objTransId000002"
 *                     companyId: "objCompId000001"
 *                     accountHead: "objaccntHeadId0001"
 *                     branchId: "objBranchId000001"
 *                     partyId: "objClientId000002"
 *                     date: "2025-01-23"
 *                     autoNarration: "Paid electricity bill"
 *                     narration: "Payment for January electricity bill"
 *                     amount: 450
 *                     type: "debit"
 *                     clientId: ""
 *                     _id: "tempId002"
 *                     b2bDetails:
 *                       - invoiceId: "ObjInvoice00001"
 *                         amount: 500
 *                       - invoiceId: "ObjInvoice00002"
 *                         amount: 250
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "An error occurred while processing the request."
 *               data: null
 */
