const editRolesFn = async ({roleId, designationId, departmentId, clientId }) => {
    try {
        return { status: true, message: "Role is updated successfully."};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editRolesFn;