const createPayrollFn = require("../../model/services/payrollMaster/createPayrollFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createPayroll = async (req, res, next) => {
    try {
        const { userId, salary, tax, companyId, clientId } = await sanitizeBody(req.body);
        const result = await createPayrollFn({ userId, salary, tax, companyId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createPayroll;