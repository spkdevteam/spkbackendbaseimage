/**
 * @swagger
 * /transaction/createInvoiceEntry:
 *   post:
 *     summary: Create a new transaction entry
 *     description: This API creates a transaction entry in the system with details such as transaction ID, company ID, account head, and other financial information.
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
 *                 description: The ID of the company associated with the transaction.
 *                 example: "objCompId000001"
 *               accountHead:
 *                 type: string
 *                 description: The account head under which the transaction is categorized.
 *                 example: "objaccntHeadId0001"
 *               branchId:
 *                 type: string
 *                 description: The branch ID associated with the transaction.
 *                 example: "objBranchId000001"
 *               partyId:
 *                 type: string
 *                 description: The party or client ID involved in the transaction.
 *                 example: "objClientId000002"
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the transaction.
 *                 example: "2025-01-23"
 *               autoNarration:
 *                 type: string
 *                 description: Automatically generated narration for the transaction.
 *                 example: "Paid electricity bill"
 *               narration:
 *                 type: string
 *                 description: Custom narration for the transaction.
 *                 example: "Payment for January electricity bill"
 *               amount:
 *                 type: number
 *                 description: The transaction amount.
 *                 example: 750.0
 *               type:
 *                 type: string
 *                 description: The type of transaction (e.g., debit or credit).
 *                 example: "debit"
 *               clientId:
 *                 type: string
 *                 description: The client ID associated with the transaction.
 *                 example: ""
 *             required:
 *               - transactionId
 *               - companyId
 *               - accountHead
 *               - branchId
 *               - partyId
 *               - date
 *               - amount
 *               - type
 *     responses:
 *       200:
 *         description: Transaction entry created successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Transaction entry created successfully."
 *               data:
 *                 transactionId: "objTransId000001"
 *                 companyId: "objCompId000001"
 *                 accountHead: "objaccntHeadId0001"
 *                 branchId: "objBranchId000001"
 *                 partyId: "objClientId000002"
 *                 date: "2025-01-23"
 *                 autoNarration: "Paid electricity bill"
 *                 narration: "Payment for January electricity bill"
 *                 amount: 750.0
 *                 type: "debit"
 *                 clientId: ""
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