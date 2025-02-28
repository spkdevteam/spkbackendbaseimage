const getOneShiftFn = require("../../model/services/shiftRegister/getOneShiftFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getOneShift = async (req, res, next) => {
    try {
        const { shiftId, companyId, clientId } = await sanitizeBody(req.params);
        const result = await getOneShiftFn({ shiftId, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = getOneShift;