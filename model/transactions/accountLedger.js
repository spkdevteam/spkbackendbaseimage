const { getClientDatabaseConnection } = require("../connection");
const transactionSchema = require("../transactions");

const accountLedger = async ({ clientId, partyId, fromDate, toDate, page = 0, perPage = 10, keyWord = '', sortField = 'createdAt', sortOrder = -1 }) => {
    try {
        const db = await getClientDatabaseConnection(clientId);
        const Transaction = db.model('Transaction', transactionSchema);

        // Parse dates only if they are provided
        const startDate = fromDate ? new Date(`${fromDate}T00:00:00.000Z`) : null;
        const endDate = toDate ? new Date(`${toDate}T23:59:59.999Z`) : null;

        const matchStage = {
            partyId: partyId,
            invoice: {
                $elemMatch: {
                    $or: [
                        { invoiceId: new RegExp(keyWord, 'i') },
                        { displayId: new RegExp(keyWord, 'i') }
                    ]
                }
            }
        };

        // Add date range filter only if fromDate and toDate exist
        if (startDate && endDate) {
            matchStage.date = { $gte: startDate, $lte: endDate };
        }

        const result = await Transaction.aggregate([
            { $match: matchStage },
            {
                $facet: {
                    opening: startDate
                        ? [
                            { $match: { date: { $gt: startDate } } },
                            { $group: { _id: null, total: { $sum: "$amount" } } }
                        ]
                        : [],
                    transaction: [
                        { $project: { _id: 0, transactionId: 1, amount: 1, date: 1, type: 1, invoice: 1 } },
                        { $sort: { createdAt: 1 } },
                        { $skip: parseInt(page) * parseInt(perPage) },
                        { $limit: parseInt(perPage) }
                    ],
                    closing: endDate
                        ? [
                            { $match: { date: { $gt: endDate } } },
                            { $group: { _id: null, total: { $sum: "$amount" } } }
                        ]
                        : [],  
                    totalDataCount: [
                        { $count: "type" }  
                    ]
                }
            }
        ]);
        let amount = 0;
        const data = [...result[0]?.transaction]?.map((inv) => {
            if (inv.type == 'credit') amount -= inv.amount
            else amount += inv.amount
            return {
                ...inv,
                balance:amount
            }
        });

        console.log(startDate,endDate,result[0].opening, 'transactions ')

        const totalDataCount = result[0]?.totalDataCount[0]?.type || 0;
        return { status: true, message: 'Transaction fetched', data: { data, totalDataCount } };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

module.exports = accountLedger;
