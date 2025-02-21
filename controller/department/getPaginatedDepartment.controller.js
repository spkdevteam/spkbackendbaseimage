const getPaginatedDepartmentFn = require("../../model/services/department/getPaginatedDepartmentFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getPaginatedDepartment = async (req, res, next) => {
    try {
        const { clientId } = await sanitizeBody(req.params);
        const department = await sanitizeBody(req.query);

        const cleanQuery = {
            page: department.page ? department.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: department.perPage ? department.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: department.searchKey ? department.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);

        const result = await getPaginatedDepartmentFn({ ...cleanQuery, clientId });
        return res.status(200).json({
            status: result?.status,
            message: result?.message,
            totalDocs: result?.totalDocs,
            totalPages: result?.totalPages,
            currentPage: result?.currentPage,
            data: result?.data
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getPaginatedDepartment;