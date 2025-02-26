const assignDocumentFn = async ({ roleId, arr, clientId })=> {
    try {
        return { status: true, message: "Documents are assigned.", data: {
            roleId,
            "assigned documents": arr
        }};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = assignDocumentFn;