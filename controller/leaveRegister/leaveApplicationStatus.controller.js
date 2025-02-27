const leaveApplicationStatusFn = require("../../model/services/leaveRegister/leaveApplicationStatusFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const leaveApplicationStatus = async (req, res, next) => {
    try {
        const { userid, clientId } = await sanitizeBody(req.params);
        const result = await leaveApplicationStatusFn({ userid, clientId});
        return res.status(200).json({status:result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = leaveApplicationStatus;