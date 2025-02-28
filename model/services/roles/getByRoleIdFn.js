const getByRoleIdFn = async ({ roleId, companyId, clientId }) => {
    try {
        return { status: true, message: "All the permissions and docs of that role", data: {
            roleId,
            companyId,
            permissions: ["read", "write", "execute"],
            document: ["aadhar card", "pan card"]
        }}
    } catch (error) {
        return { status: false, message: error.message}
    }
}

module.exports = getByRoleIdFn;