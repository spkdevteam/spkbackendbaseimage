const getPermissionByRoleFn = async ({ role, companyId, clientId}) => {
    try {
        return { status: true, message: "These are permissions available for the role", data:{
            role,
            companyId,
            permissions: ["read", "write", "execute"]
        }};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = getPermissionByRoleFn;