const getPermissionsByRoleIdFn = async ({ roleId, clientId }) => {
    try {
        return {
            status: true, message: "Here are all the permissions on this role", data: [{
                "permission": "read",
                "schema": "user"
            }]
        }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = getPermissionsByRoleIdFn;