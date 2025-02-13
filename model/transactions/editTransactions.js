async function updateTransaction(transactionId, updateData) {
    try {
        const updatedTransaction = await Transaction.findOneAndUpdate(
            { transactionId: transactionId }, // Find by transactionId
            { $set: updateData }, // Update the fields
            { new: true, useFindAndModify: false } // Return the updated document
        );

        if (updatedTransaction) {
            console.log('Transaction updated successfully:', updatedTransaction);
        } else {
            console.log('Transaction not found with transactionId:', transactionId);
        }
    } catch (error) {
        console.error('Error updating transaction:', error);
    }
}

module.exports = updateTransaction