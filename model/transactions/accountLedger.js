const { getClientDatabaseConnection } = require("../connection");
const transactionSchema = require("../transactions");

const accountLedger = async ({ clientId, partyId, fromDate, toDate,page=0,perPage=10,keyWord='' }) => {
    try {
        const db = await getClientDatabaseConnection(clientId);
        const Transaction = db.model('Transaction', transactionSchema);
        const startDate = new Date(`${fromDate}T00:00:00.000Z`);
        const endDate = new Date(`${toDate}T23:59:59.999Z`);

        const result = await Transaction.aggregate([
            {
                $match:{
                    partyId:partyId,
                    invoice:{
                        $elemMatch:{ $or: [
                            { invoiceId: new RegExp(keyWord, 'i') },
                            { displayId: new RegExp(keyWord, 'i') }
                        ]
                    }
                    } 
                }
            },
            // {
            //     $setWindowFields: {
            //         partitionBy: "$partyId",
            //         sortBy: { date: 1, _id: 1 },
            //         output: {
            //             cumulativeBalance: {
            //                 $sum: {
            //                     $cond: {
            //                         if: { $eq: ["$type", "debit"] },
            //                         then: { $multiply: ["$amount", -1] },  
            //                         else: "$amount" // Add credit
            //                     }
            //                 }
            //             },
            //             window: {
            //                 documents: ["unbounded", "current"] // Running total from start
            //             }
            //         }
            //     }
            // },

            {
                $facet: {
                    opening: [
                        { $match: { date: { $lt: startDate } } },
                        { $group: { _id: null, total: { $sum: "$amount" } } }
                    ],
                    transaction: [
                        { $match: { date: { $gte: startDate, $lte: endDate } } },
                        // {$unwind:'$invoice'},
                        { $project: { _id: 0, transactionId: 1, amount: 1, date: 1,type:1,invoice:1 } },
                        {$skip:parseInt(page) *parseInt(perPage)  },
                        {$limit:parseInt(perPage)}
                    ],
                    closing: [
                        { $match: { date: { $gt: endDate } } },
                        { $group: { _id: null, total: { $sum: "$amount" } } }
                    ],
                    totalDataCount: [
                        { $match: { date: { $gte: startDate, $lte: endDate } } },
                        { $count: "type" } // Count total number of matching records
                    ]
                     
                }
            }
        ]);
        console.log(result[0], 'result');
        const data = [
        //     {
        //     type: "",
        //     amount: result[0]?.opening?.length ? result[0]?.opening[0]?.total:0,
        //     date: fromDate,
        //     invoice: "" ,
        //     transactionId: "Opening"
        // },
        ...result[0]?.transaction ,
        // {
        //     type: "",
        //     amount: result[0]?.closing?.length ? result[0]?.closing[0]?.total:0,
        //     date: toDate,
        //     invoice: "" ,
        //     transactionId: "Closing"
        // }
    ]
        
        const totalDataCount = result[0]?.totalDataCount[0]?.type
        return { status: true, message: 'Transaction fetched', data: {data,totalDataCount} };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

module.exports = accountLedger;
