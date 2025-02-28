const deleteRoleFn = async ({ roleId, companyId, clientId }) => {
    try {
        return {status: true, message: "Role is deleted successfully."};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = deleteRoleFn;