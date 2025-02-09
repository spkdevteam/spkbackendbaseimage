const { default: mongoose, Aggregate, model } = require("mongoose")
const { getClientDatabaseConnection } = require("../connection")
const transactionSchema = require("../transactions")

async function partyBillWiseSummary({ clientId, partyId }) {

    try {
        if (!clientId) return { status: false, message: 'invalid Client Id' }
        if (!partyId) return { status: false, message: 'invalid Party id' }
        const db = await getClientDatabaseConnection(clientId)
        const Transactions = await db.model('transaction', transactionSchema)
        const paymentDetails = await Transactions.aggregate([
            {
                $match: { partyId: partyId } // Filter by Party
            },
            {
                $unwind: "$invoice" // Flatten invoices array
            },
            {
                $group: {
                    _id: "$invoice.displayId",
                    invoiceId: { $first: "$invoice.displayId" }, // Store invoice ID
                    totalAmount: { $sum: "$invoice.amount" }, // Calculate total amount
                    transactions: {
                        $push: {
                            transactionId: "$transactionId",
                            amount: "$invoice.amount",
                            date: "$date",
                            paymentMode: "$paymentMode",
                            type: "$type"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    invoiceId: 1,
                    
                    paidDetails: {
                        $filter: {
                            input: "$transactions",
                            as: "txn",
                            cond: { $eq: ["$$txn.type", "debit"] } // Filter only debit transactions
                        }
                    },
                    payableDetails: {
                        $filter: {
                            input: "$transactions",
                            as: "txn",
                            cond: { $eq: ["$$txn.type", "credit"] } // Filter only debit transactions
                        }
                    }
                }
            }
        ]);
        
        console.log(paymentDetails, 'paymentDetails')
        return { status: true, message: 'Success', data: paymentDetails }

    } catch (error) {
        return { status: true, message: 'fail' }
    }
}

module.exports = partyBillWiseSummary


