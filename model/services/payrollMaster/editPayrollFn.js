const editPayrollFn = async ({ payrollId, userId, salary, tax, companyId, clientId }) => {
    try {
        return { status: true, message: "Updated successfully."};
    } catch (error) {
        return {status: false, message: error.message };
    }
}

module.exports = editPayrollFn;