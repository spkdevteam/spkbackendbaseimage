const createLeaveApplicationFn = require("../../model/services/leaveRegister/createLeaveApplicationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createLeaveApplication = async (req, res, next) => {
    try {
        const { userId, application, leaveType, clientId } = await sanitizeBody(req.body);
        const result = await createLeaveApplicationFn({ userId, application, leaveType, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = createLeaveApplication;