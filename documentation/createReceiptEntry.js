/**
 * @swagger
 * /transaction/createReceiptEntry:
 *   post:
 *     summary: Create a new payment entry
 *     description: This API creates a payment entry in the system with detailed transaction and B2B invoice information.
 *     tags:
 *       - Transactions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transactionId:
 *                 type: string
 *                 description: The unique ID of the transaction.
 *                 example: "objTransId000001"
 *               companyId:
 *                 type: string
 *                 description: The ID of the company associated with the payment entry.
 *                 example: "objCompId000001"
 *               accountHead:
 *                 type: string
 *                 description: The account head under which the payment is categorized.
 *                 example: "objaccntHeadId0001"
 *               branchId:
 *                 type: string
 *                 description: The branch ID associated with the payment entry.
 *                 example: "objBranchId000001"
 *               partyId:
 *                 type: string
 *                 description: The party or client ID involved in the payment.
 *                 example: "objClientId000002"
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the payment.
 *                 example: "2025-01-23"
 *               autoNarration:
 *                 type: string
 *                 description: Automatically generated narration for the payment.
 *                 example: "Paid electricity bill"
 *               narration:
 *                 type: string
 *                 description: Custom narration for the payment.
 *                 example: "Payment for January electricity bill"
 *               amount:
 *                 type: number
 *                 description: The payment amount.
 *                 example: 750
 *               type:
 *                 type: string
 *                 description: The type of payment transaction (e.g., debit or credit).
 *                 example: "debit"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the payment entry.
 *                 example: ""
 *               _id:
 *                 type: string
 *                 description: The temporary ID for the payment entry.
 *                 example: "tempId001"
 *               b2bDetails:
 *                 type: array
 *                 description: List of B2B invoice details associated with the payment.
 *                 items:
 *                   type: object
 *                   properties:
 *                     invoiceId:
 *                       type: string
 *                       description: The unique ID of the invoice.
 *                       example: "ObjInvoice00001"
 *                     amount:
 *                       type: number
 *                       description: The amount paid against the invoice.
 *                       example: 500
 *             required:
 *               - transactionId
 *               - companyId
 *               - accountHead
 *               - branchId
 *               - partyId
 *               - date
 *               - amount
 *               - type
 *               - b2bDetails
 *     responses:
 *       200:
 *         description: Payment entry created successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Payment entry created successfully."
 *               data:
 *                 transactionId: "objTransId000001"
 *                 companyId: "objCompId000001"
 *                 accountHead: "objaccntHeadId0001"
 *                 branchId: "objBranchId000001"
 *                 partyId: "objClientId000002"
 *                 date: "2025-01-23"
 *                 autoNarration: "Paid electricity bill"
 *                 narration: "Payment for January electricity bill"
 *                 amount: 750
 *                 type: "debit"
 *                 clientId: ""
 *                 _id: "tempId001"
 *                 b2bDetails:
 *                   - invoiceId: "ObjInvoice00001"
 *                     amount: 500
 *                   - invoiceId: "ObjInvoice00002"
 *                     amount: 250
 *       400:
 *         description: Bad request. Missing or invalid data.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request body."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
