const editHolidayFn = require("../../model/services/holidayMaster/editHolidayFn");
const editDocumentFn = require("../../model/services/roles/editDocumentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editHoliday = async (req, res, next) => {
    try {
        const { holidayId, holiday, holidayName, companyId, clientId } = await sanitizeBody(req.body);
        const result = await editHolidayFn({ holidayId, holiday, holidayName, companyId, clientId });
        return res.status(200).json({ status:result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = editHoliday;