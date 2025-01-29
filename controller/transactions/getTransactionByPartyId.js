

const getTransactionByPartyId = async (req, res, next) => {
    try {
        const { clientId, transactionId, fromDate, toDate,keyWord, page, perPage } = req.params;  // Access params correctly

        console.log(req.params, 'req.params');  // Log the parameters

        // Simulate deletion logic (replace with actual DB operation)
        // Example: await TransactionModel.deleteOne({ clientId, transactionId });

        const result = {
            statusCode: 200,
            status: true,
            message: 'Entry deleted successfully',
            data: {
                openingBalance: 0.00,
                closingBalance: 300,
                totalTransaction:2,
                perPage:perPage,
                page:page,
                searchKey:keyWord,
                fromDate:fromDate,
                toDate:toDate,
                transactions: [
                    {

                        "transactionId": "objTransId000001",
                        "companyId": "objCompId000001",
                        "accountHead": "objaccntHeadId0001",
                        "branchId": "objBranchId000001",
                        "partyId": "objClientId000002",
                        "date": "2025-01-23",
                        "autoNarration": "Paid electricity bill",
                        "narration": "Payment for January electricity bill",
                        "amount": 750,
                        "type": "credit",
                        "clientId": "",
                        "_id": "tempId001",
                        "invoice": [{ invoiceId: 'ObjInvoice00001',displayId:'ObjDisplay00001', amount: 500 }, { invoiceId: 'ObjInvoice00002', displayId:'ObjDisplay00001', amount: 250 }]

                    },
                    {
                        "transactionId": "objTransId000001",
                        "companyId": "objCompId000001",
                        "accountHead": "objaccntHeadId0001",
                        "branchId": "objBranchId000001",
                        "partyId": "objClientId000002",
                        "date": "2025-01-23",
                        "autoNarration": "Paid electricity bill",
                        "narration": "Payment for January electricity bill",
                        "amount": 450,
                        "type": "debit",
                        "clientId": "",
                        "_id": "tempId001",
                        "invoice": [{ invoiceId: 'ObjInvoice0002',displayId:'ObjDisplay00002', amount: 200 }, { invoiceId: 'ObjInvoice0003', displayId:'ObjDisplay0003', amount: 250 }]
                    }]
            },
        };

        // Respond with status code and message
        res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            data: result.data,
        });
    } catch (error) {
        // Handle error and pass it to next middleware
        next(error);
    }
};

module.exports = getTransactionByPartyId;
