const getPaginatedMenuMasterFn = require("../../model/services/menuMaster/getPaginatedMenuMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedMenuMaster = async (req, res, next) => {
    try {
        const { clientId } = await sanitizeBody(req.params);
        const menu = await sanitizeBody(req.query);

        const cleanQuery = {
            page: menu.page ? menu.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: menu.perPage ? menu.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: menu.searchKey ? menu.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage, searchKey } = cleanQuery;
        const result = await getPaginatedMenuMasterFn({ page, perPage, searchKey, clientId });
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

module.exports = getPaginatedMenuMaster;