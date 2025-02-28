const editPayrollFn = require("../../model/services/payrollMaster/editPayrollFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editPayroll = async (req, res, next) => {
    try {
        const { payrollId, userId, salary, tax, companyId, clientId } = await sanitizeBody(req.body);
        const result = await editPayrollFn({ payrollId, userId, salary, tax, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = editPayroll;