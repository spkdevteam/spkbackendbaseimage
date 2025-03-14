const deleteDocumentFn = async ({ roleId, companyId, clientId }) => {
    try {
        return {status: true, message: "Document deleted succesfully."};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = deleteDocumentFn;