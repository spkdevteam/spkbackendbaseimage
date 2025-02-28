const getDocumentsByRoleFn = async ({ role, companyId, clientId }) => {
    try {
        return {
            status: true, message: "Documents", data: {
                role,
                companyId,
                documents: ["aadhar card", "pan card"]
            }
        };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getDocumentsByRoleFn;