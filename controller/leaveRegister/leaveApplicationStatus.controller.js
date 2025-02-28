const leaveApplicationStatusFn = require("../../model/services/leaveRegister/leaveApplicationStatusFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const leaveApplicationStatus = async (req, res, next) => {
    try {
        const { userId, companyId, status, clientId } = await sanitizeBody(req.params);
        console.log(status)
        const result = await leaveApplicationStatusFn({ userId, companyId, status, clientId});
        return res.status(200).json({status:result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = leaveApplicationStatus;