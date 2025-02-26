const assignPermissionFn = async ({ roleId, arr, clientId }) => {
    try {
        return { status: true, message: "Permissions are assigned.", data: {
            roleId,
            "assigned permissions": arr
        } };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = assignPermissionFn;