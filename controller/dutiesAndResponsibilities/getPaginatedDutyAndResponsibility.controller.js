const getPaginatedDutyAndResponsibilityFn = require("../../model/services/dutiesAndResponsibilities/getPaginatedDutyAndResponsibilityFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedDutyAndResponsibility = async (req, res, next) => {
    try {
        const { clientId } = await sanitizeBody(req.params);
        const duty = await sanitizeBody(req.query);
        const cleanQuery = {
            page: duty.page ? duty.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: duty.perPage ? duty.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: duty.searchKey ? duty.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage, searchKey } = cleanQuery;
        const result = await getPaginatedDutyAndResponsibilityFn({ page, perPage, searchKey, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data, metadata: result?.metadata });
    } catch (error) {
        next(error);
    }
}

module.exports = getPaginatedDutyAndResponsibility;