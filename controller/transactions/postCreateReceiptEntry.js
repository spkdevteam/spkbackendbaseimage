const createOrUpdateTransaction = require("../../model/transactions/insertTransaction");



const postCreateReceiptEntry = async (req, res, next) => {
    try {
        const { body: data } = req;

        // Generate a unique ID if necessary
        const transactionData = {
            ...data,
            date: new Date(data.date), // Ensure the date is a valid Date object
        };

        // Insert the transaction into the database
        const savedTransaction = await createOrUpdateTransaction(transactionData);

        // Send the success response
        return res.status(200).json({
            status: true,
            message: 'Entry created successfully',
            data: savedTransaction,
        });
    } catch (error) {
        console.error('Error creating receipt entry:', error.message);

        // Pass error to the error-handling middleware
        return next({
            statusCode: error.statusCode || 500,
            message: error.message || 'Internal Server Error',
        });
    }
};

module.exports = postCreateReceiptEntry;
