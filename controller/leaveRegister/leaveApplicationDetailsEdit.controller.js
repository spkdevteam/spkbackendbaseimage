const leaveApplicationDetailsEditFn = require("../../model/services/leaveRegister/leaveApplicationDetailsEditFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const leaveApplicationDetailsEdit = async (req, res, next) => {
    try {
        const { userId, isApproved, clientId } = await sanitizeBody(req.body);
        const result = await leaveApplicationDetailsEditFn({ userId, isApproved, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = leaveApplicationDetailsEdit;