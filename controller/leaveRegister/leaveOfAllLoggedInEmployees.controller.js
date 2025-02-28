const leaveOfAllLoggedInEmployeesFn = require("../../model/services/leaveRegister/leaveOfAllLoggedInEmployeesFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const leaveOfAllLoggedInEmployees = async (req, res, next) => {
    try {
        const { companyId, clientId } = await sanitizeBody(req.params);
        const metaData = await sanitizeBody(req.query);
        const cleanQuery = {
            page: metaData.page ? metaData.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: metaData.perPage ? metaData.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage } = cleanQuery;
        const result = await leaveOfAllLoggedInEmployeesFn({ page, perPage, companyId, clientId });
        return res.status(200).json({status: result?.status, message: result?.message, data: result?.data, metaData: result?.metaData });
    } catch (error) {
        next(error);
    }
}

module.exports = leaveOfAllLoggedInEmployees;