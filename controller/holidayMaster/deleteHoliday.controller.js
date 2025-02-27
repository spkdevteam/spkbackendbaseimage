const deleteHolidayFn = require("../../model/services/holidayMaster/deleteHolidayFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteHoliday = async (req, res, next) => {
    try {
        const { holidayId, clientId } = await sanitizeBody(req.params);
        const result = await deleteHolidayFn({ holidayId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteHoliday;