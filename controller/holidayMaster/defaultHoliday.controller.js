const defaultHolidayFn = require("../../model/services/holidayMaster/defaultHolidayFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const defaultHoliday = async (req, res, next) => { 
    try {
        const { holidayId, defaultHolidayName, companyId, clientId } = await sanitizeBody(req.body);
        const result = await defaultHolidayFn({ holidayId, defaultHolidayName, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = defaultHoliday;