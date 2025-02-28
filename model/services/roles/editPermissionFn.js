const editPermissionFn = async ({roleId, arr, companyId, clientId})=>{
    try {
        return { status: true, message: "Permissions are updated successfully."};
    } catch (error) {
        return { status: true, message: error.message };
    }
}

module.exports = editPermissionFn;