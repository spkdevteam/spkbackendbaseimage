const assignPermissionFn = async ({ roleId, arr, companyId, clientId }) => {
    try {
        return { status: true, message: "Permissions are assigned.", data: {
            roleId,
            companyId,
            "assigned permissions": arr
        } };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = assignPermissionFn;