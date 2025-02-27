const getPayrollByIdFn = require("../../model/services/payrollMaster/getPayrollByIdFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPayrollById = async (req, res, next) => {
    try {
        const { payrollId, clientId } = await sanitizeBody(req.params);
        const result = await getPayrollByIdFn({ payrollId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = getPayrollById;