const postCreateCreditEntry = (req, res, next) => {
    try {
        const   data  = req.body;
         

        // Simulate creating a new credit entry with temporary ID
        const result = {
            statusCode: 200,
            status: true,
            message: 'Entry created successfully',
            data: { ...data , _id: 'tempId001' },
        };

        // Respond with status code and data while omitting `statusCode` from the JSON body
         
        res.status(result?.statusCode).json(result);
    } catch (error) {
        // Pass the error to the next middleware (error handling)
        next(error);
    }
};

module.exports = postCreateCreditEntry
