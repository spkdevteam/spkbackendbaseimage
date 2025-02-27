const toggleHolidayFn = require("../../model/services/holidayMaster/toggleHolidayFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const toggleHoliday = async (req, res, next) => {
    try {
        const { holidayId, clientid } = await sanitizeBody(req.body);
        const result = await toggleHolidayFn({ holidayId, clientid });
        return res.status(200).json({status: result?.status, message: result?.message });
    } catch (error) {
        next(error);
    }
}

module.exports = toggleHoliday;