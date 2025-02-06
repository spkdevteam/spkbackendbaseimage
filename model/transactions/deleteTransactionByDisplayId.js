const { getClientDatabaseConnection } = require("../connection");
const transactionSchema = require("../transactions");

const deleteTransactionByDisplayId = async ({ clientId, transactionId }) => {
    try {
        const db = await getClientDatabaseConnection(clientId);
        const Transaction = db.model("Transaction", transactionSchema);

        // Delete both records associated with the given displayId
        const result = await Transaction.deleteMany({ transactionId: transactionId });
        console.log(result,'resultresult')
        if (result.deletedCount > 0) {
            return { status: true, message: "Transaction deleted successfully", deletedCount: result.deletedCount };
        } else {
            return { status: false, message: "No transactions found with the given displayId" };
        }
    } catch (error) {
        return { status: false, message: error.message };
    }
};

module.exports = deleteTransactionByDisplayId;
