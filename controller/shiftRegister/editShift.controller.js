const editShiftRegisterFn = require("../../model/services/shiftRegister/editShiftFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editShift = async (req, res, next) => {
    try {
        const { shiftId, shiftName, startTime, endTime, companyId, clientId } = await sanitizeBody(req.body);
        const result = await editShiftRegisterFn({shiftId, shiftName, startTime, endTime, companyId, clientId});
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = editShift;