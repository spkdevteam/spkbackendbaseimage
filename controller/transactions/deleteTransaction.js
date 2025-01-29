const deleteTransaction = async (req, res, next) => {
    try {
        const { clientId, transactionId } = req.params;  // Access params correctly

        console.log(clientId, transactionId, 'clientId, transactionId');  // Log the parameters

        // Simulate deletion logic (replace with actual DB operation)
        // Example: await TransactionModel.deleteOne({ clientId, transactionId });

        const result = {
            statusCode: 200,
            status: true,
            message: 'Entry deleted successfully',
            data: { _id: transactionId },
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

module.exports = deleteTransaction;
