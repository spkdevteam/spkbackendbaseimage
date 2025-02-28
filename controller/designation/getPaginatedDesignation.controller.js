const getPaginatedDesignationFn = require("../../model/services/designation/getPaginatedDesignationFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedDesignation = async (req, res, next) => {
    try {
        const { clientId } = await sanitizeBody(req.params);
        const designation = await sanitizeBody(req.query);
        const cleanQuery = {
            page: designation.page ? designation.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: designation.perPage ? designation.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: designation.searchKey ? designation.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage, searchKey } = cleanQuery;
        const result = await getPaginatedDesignationFn({ page, perPage, searchKey, clientId });
        return res.status(200).json({
            status: result?.status,
            message: result?.message,
            data: result?.data,
            metaData: result?.metaData
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getPaginatedDesignation;