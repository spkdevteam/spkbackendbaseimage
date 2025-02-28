const createShiftFn = require("../../model/services/shiftRegister/createShiftFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createShift = async (req, res, next) => {
    try {
        const { shiftName, startTime, endTime, companyId, clientId } = await sanitizeBody(req.body);
        const result = await createShiftFn({shiftName, startTime, endTime, companyId, clientId});
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createShift;