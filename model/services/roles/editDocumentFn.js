const editDocumentFn = async ({ roleId, arr, clientId }) => {
    try {
        return {status:true, message: "Updated documents"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = editDocumentFn;