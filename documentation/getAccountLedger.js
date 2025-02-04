/**
 * @swagger
 * /transaction/accountledger:
 *   get:
 *     summary: Retrieve account ledger details
 *     description: Fetches the ledger transactions for a given party within a specified date range, with optional pagination and keyword filtering.
 *     tags:
 *       - Transactions
 *     parameters:
 *       - in: query
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the client requesting the ledger.
 *         example: "client67890"
 *       - in: query
 *         name: partyId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the party whose ledger is being retrieved.
 *         example: "party12345"
 *       - in: query
 *         name: fromDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: The start date for the ledger transactions (YYYY-MM-DD).
 *         example: "2024-01-01"
 *       - in: query
 *         name: toDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: The end date for the ledger transactions (YYYY-MM-DD).
 *         example: "2024-01-31"
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: The page number for paginated results (0-based index).
 *         example: 0
 *       - in: query
 *         name: perPage
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of records per page.
 *         example: 10
 *       - in: query
 *         name: keyWord
 *         required: false
 *         schema:
 *           type: string
 *           default: ""
 *         description: A keyword to filter ledger transactions (e.g., by description).
 *         example: "invoice payment"
 *     responses:
 *       200:
 *         description: Ledger transactions retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Ledger transactions retrieved successfully."
 *               data:
 *                 partyId: "party12345"
 *                 clientId: "client67890"
 *                 transactions:
 *                   - date: "2024-01-05"
 *                     description: "Invoice Payment"
 *                     amount: 500.00
 *                     balance: 4500.00
 *                   - date: "2024-01-15"
 *                     description: "Purchase"
 *                     amount: -300.00
 *                     balance: 4200.00
 *                 pagination:
 *                   currentPage: 0
 *                   perPage: 10
 *                   totalItems: 50
 *                   totalPages: 5
 *       400:
 *         description: Invalid or missing input parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid input. Please provide all required fields."
 *       404:
 *         description: No ledger transactions found for the given criteria.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "No transactions found for the specified party and date range."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
