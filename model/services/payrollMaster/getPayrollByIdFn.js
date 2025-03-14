const getPayrollByIdFn = async ({ payrollId, companyId, clientId }) => {
    try {
        return { status: true, message: "The payroll is", data: {
            payrollId,
            companyId,
            userId: "67b3266d425c6067035df2fd",
            salary: 12000,
            tax: 0
        }}
    } catch (error) {
        return {status: false, message: error.message}
    }
}

module.exports = getPayrollByIdFn;