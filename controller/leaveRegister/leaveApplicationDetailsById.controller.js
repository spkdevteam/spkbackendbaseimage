const leaveApplicationDetailsByIdFn = require("../../model/services/leaveRegister/leaveApplicationDetailsByIdFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const leaveApplicationDetailsById = async (req, res, next) => {
    try {
        const { userId, clientId } = await sanitizeBody(req.params);
        const result = await leaveApplicationDetailsByIdFn({ userId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = leaveApplicationDetailsById;