const getPaginatedpayrollFn = require("../../model/services/payrollMaster/getPaginatedpayrollFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedpayroll = async (req, res, next) => {
    try {
        const { clientId } = await sanitizeBody(req.params);
        const payroll = await sanitizeBody(req.query);
        const cleanQuery = {
            page: payroll.page ? payroll.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: payroll.perPage ? payroll.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: payroll.searchKey ? payroll.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage, searchKey } = cleanQuery;
        const result = await getPaginatedpayrollFn({ page, perPage, searchKey, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data, metadata: result?.metaData });
    } catch (error) {
        next(error);
    }
}

module.exports = getPaginatedpayroll;