const getPaginatedApiFn = require("../../model/services/apiMaster/getPaginatedApiFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedApi = async (req, res, next) => {
    try {
        const { clientId } = await sanitizeBody(req.params);
        const api = await sanitizeBody(req.query);

        const cleanQuery = {
            page: api.page ? api.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: api.perPage ? api.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: api.searchKey ? api.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage, searchKey } = cleanQuery;
        const result = await getPaginatedApiFn({ page, perPage, searchKey, clientId });
        return res.status(200).json({
            status: result?.status,
            message: result?.message,
            data: result?.data,
            metaData: result?.metaData
        });
    } catch (error) {
        
    }
}

module.exports = getPaginatedApi;