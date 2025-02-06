const deleteTransactionByDisplayId = require("../../model/transactions/deleteTransactionByDisplayId");

const deleteTransaction = async (req, res, next) => {
    try {
        const { clientId, transactionId } = req.params;  // Access params correctly
        

        console.log(clientId, transactionId, 'clientId, transactionId');  // Log the parameters

        // Simulate deletion logic (replace with actual DB operation)
        // Example: await TransactionModel.deleteOne({ clientId, transactionId });
        const responce = await deleteTransactionByDisplayId({clientId, transactionId})
        // const result = {
        //     statusCode: 200,
        //     status: responce.status,
        //     message: responce.message,
        //     data: responce.deletedCount,
        // };

        // Respond with status code and message
        res.json({
            status: responce.status,
            message: responce.message,
            data: responce.deletedCount,
        });
    } catch (error) {
        // Handle error and pass it to next middleware
        next(error);
    }
};

module.exports = deleteTransaction;
