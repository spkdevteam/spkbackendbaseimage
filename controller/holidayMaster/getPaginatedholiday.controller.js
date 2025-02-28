const getPaginatedHolidayFn = require("../../model/services/holidayMaster/getPaginatedHolidayFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedholiday = async (req, res, next) => {
    try {
        const { companyId, clientId } = await sanitizeBody(req.params);
        const holiday = await sanitizeBody(req.query);
        const cleanQuery = {
            page: holiday.page ? holiday.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: holiday.perPage ? holiday.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: holiday.searchKey ? holiday.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage, searchKey } = cleanQuery;
        const result = await getPaginatedHolidayFn({ page, perPage, searchKey, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data, metadata: result?.metaData });
    } catch (error) {
        next(error);
    }
}

module.exports = getPaginatedholiday;