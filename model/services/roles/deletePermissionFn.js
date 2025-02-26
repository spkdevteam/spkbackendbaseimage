const deletePermissionFn = async ({ roleId, clientId}) => {
    try {
        return {status: true, message: "Permission deleted succesfully."};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = deletePermissionFn;