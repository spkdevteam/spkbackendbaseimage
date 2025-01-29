/**
 * @swagger
 * /transaction/transactionByPartyId/{clientId}/{partyId}/{fromDate}/{toDate}/{keyWord}/{page}/{perPage}:
 *   get:
 *     summary: Get transactions by Party ID
 *     description: This API retrieves transaction details filtered by client ID, party ID, optional date range, keyword, and pagination parameters.
 *     tags:
 *       - Transactions
 *     parameters:
 *       - name: clientId
 *         in: path
 *         required: true
 *         description: The client ID associated with the transactions.
 *         schema:
 *           type: string
 *           example: "objCompId000001"
 *       - name: partyId
 *         in: path
 *         required: true
 *         description: The party ID to filter the transactions.
 *         schema:
 *           type: string
 *           example: "objClientId000002"
 *       - name: fromDate
 *         in: path
 *         required: false
 *         description: |
 *           The start date for the transaction filter (format: YYYY-MM-DD).
 *         schema:
 *           type: string
 *           format: date
 *           example: "2025-01-01"
 *       - name: toDate
 *         in: path
 *         required: false
 *         description: |
 *           The end date for the transaction filter (format: YYYY-MM-DD).
 *         schema:
 *           type: string
 *           format: date
 *           example: "2025-01-31"
 *       - name: keyWord
 *         in: path
 *         required: false
 *         description: |
 *           The keyword for searching transactions (e.g., narration, party name).
 *         schema:
 *           type: string
 *           example: "electricity bill"
 *       - name: page
 *         in: path
 *         required: false
 *         description: |
 *           The page number for pagination (defaults to 1).
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: perPage
 *         in: path
 *         required: false
 *         description: |
 *           The number of transactions per page for pagination (defaults to 10).
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: A list of transactions filtered by the provided parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Transactions fetched successfully."
 *               data:
 *                 openingBalance: 0.00
 *                 closingBalance: 300.00
 *                 totalTransaction: 2
 *                 perPage: 10
 *                 page: 1
 *                 searchKey: "electricity bill"
 *                 fromDate: "2025-01-01"
 *                 toDate: "2025-01-31"
 *                 transactions: [
 *                   {
 *                     "transactionId": "objTransId000001",
 *                     "companyId": "objCompId000001",
 *                     "accountHead": "objaccntHeadId0001",
 *                     "branchId": "objBranchId000001",
 *                     "partyId": "objClientId000002",
 *                     "date": "2025-01-23",
 *                     "autoNarration": "Paid electricity bill",
 *                     "narration": "Payment for January electricity bill",
 *                     "amount": 750,
 *                     "type": "credit",
 *                     "clientId": "",
 *                     "_id": "tempId001",
 *                     "b2bDetails": [
 *                       { "invoiceId": "ObjInvoice00001", "amount": 500 },
 *                       { "invoiceId": "ObjInvoice00002", "amount": 250 }
 *                     ]
 *                   },
 *                   {
 *                     "transactionId": "objTransId000002",
 *                     "companyId": "objCompId000001",
 *                     "accountHead": "objaccntHeadId0001",
 *                     "branchId": "objBranchId000001",
 *                     "partyId": "objClientId000002",
 *                     "date": "2025-01-23",
 *                     "autoNarration": "Paid electricity bill",
 *                     "narration": "Payment for January electricity bill",
 *                     "amount": 450,
 *                     "type": "debit",
 *                     "clientId": "",
 *                     "_id": "tempId002",
 *                     "b2bDetails": [
 *                       { "invoiceId": "ObjInvoice00001", "amount": 500 },
 *                       { "invoiceId": "ObjInvoice00002", "amount": 250 }
 *                     ]
 *                   }
 *                 ]
 */
