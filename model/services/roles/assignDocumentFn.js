const assignDocumentFn = async ({ roleId, arr, companyId, clientId })=> {
    try {
        return { status: true, message: "Documents are assigned.", data: {
            roleId,
            companyId,
            "assigned documents": arr
        }};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = assignDocumentFn;