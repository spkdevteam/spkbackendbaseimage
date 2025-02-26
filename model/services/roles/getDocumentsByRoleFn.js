const getDocumentsByRoleFn = async ({ role, clientId }) => {
    try {
        return {
            status: true, message: "Documents", data: {
                role,
                documents: ["aadhar card", "pan card"]
            }
        };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getDocumentsByRoleFn;