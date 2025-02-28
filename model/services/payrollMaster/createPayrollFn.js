const createPayrollFn = async ({ userId, salary, tax, companyId, clientId }) => {
    try {
        return { status: true, message: "New payroll is created for the employee", data: {
            payRollId: "67b32669425c6067035df2fa",
            companyId,
            userId,
            salary,
            tax
        }};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = createPayrollFn;