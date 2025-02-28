const deleteShiftFn = require("../../model/services/shiftRegister/deleteShiftFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteShift = async (req, res, next) => {
    try {
        const { shiftId, companyId, clientId } = await sanitizeBody(req.params);
        const result = await deleteShiftFn({ shiftId, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = deleteShift;