const getPaginatedRolesFn = require("../../model/services/roles/getPaginatedRolesFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedRoles = async (req, res, next) => {
    try {
        const { clientId } = await sanitizeBody(req.params);
        const roles = await sanitizeBody(req.query);
        const cleanQuery = {
            page: roles.page ? roles.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: roles.perPage ? roles.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: roles.searchKey ? roles.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
        const { page, perPage, searchKey } = cleanQuery;
        const result = await getPaginatedRolesFn({ page, perPage, searchKey, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data, metadata: result?.metaData });
    } catch (error) {
        next(error);
    }
}

module.exports = getPaginatedRoles;