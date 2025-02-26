const getPermissionByRoleFn = async ({ role, clientId}) => {
    try {
        return { status: true, message: "These are permissions available for the role", data:{
            role,
            permissions: ["read", "write", "execute"]
        }};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = getPermissionByRoleFn;