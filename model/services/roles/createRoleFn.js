const createRoleFn = async ({ name, companyId, designationId, departmentId, clientId }) => {
    try {
        return { status: true, message: "Role is created successfully.", data: {
            roleId: "67b32661425c6067035df2f7",
            name,
            companyId,
            designationId,
            departmentId
        }};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createRoleFn;