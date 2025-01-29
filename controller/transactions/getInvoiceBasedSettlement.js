 



const getInvoiceBasedSettlement = async (req, res, next) => {
    try {
        const { clientId, invoiceId } = req.params;  // Access params correctly

        console.log(req.params, 'req.params');  // Log the parameters

        // Simulate summary generation logic  to retreive the transactions history 
        

        const result = {
            statusCode: 200,
            status: true,
            message: 'invoice details fetched successfully',
            data: {
                totalAmount: 750.00,
                closingBalance: 300,
                paidAmount:450,
                totalTransaction:2,
                invoiceId:invoiceId,
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
                        "b2bDetails": [{ invoiceId: 'ObjInvoice00001', amount: 500 }, { invoiceId: 'ObjInvoice00002', amount: 250 }]

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
                        "b2bDetails": [{ invoiceId: 'ObjInvoice00001', amount: 500 }, { invoiceId: 'ObjInvoice00002', amount: 250 }]
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

module.exports = getInvoiceBasedSettlement;
