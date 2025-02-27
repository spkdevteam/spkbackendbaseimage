const createHolidayFn = require("../../model/services/holidayMaster/createHolidayFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createHoliday = async (req, res, next) => {
    try {
        const { companyId, holiday, holidayName, clientId } = await sanitizeBody(req.body);
        const result = await createHolidayFn({ companyId, holiday, holidayName, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createHoliday;