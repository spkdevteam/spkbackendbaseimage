const { getClientDatabaseConnection } = require("../../connection");
const departmentSchema = require("../../department");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");

const getPaginatedDepartmentFn = async ({ page = 1, perPage = 10, searchKey="", clientId }) => {
    try {
        const validation = [
            clientIdValidation({clientId}),
            emptyStringValidation({ string: searchKey, name: "Search Key: "})
        ];

        const error = validation.filter((e) => e && e.status == false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };


        const pageNumber = parseInt(page);
        const perPageNumber = parseInt(perPage);


        if(pageNumber <= 0) return { status: false, message: "Invalid page number"};
        if(perPageNumber <= 0) return { status: false, message: "Invalid per page number"};

        const skip = (pageNumber - 1) * perPageNumber;

        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);

        let searchQuery = {};
        if (searchKey.trim()) {
            const escapedSearchKey = searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            if (isNaN(searchKey)) {
                searchQuery = {
                    $or: [
                        { description: { $regex: `^${escapedSearchKey}`, $options: "i" }, deletedAt: null },
                        { deptName: { $regex: `^${escapedSearchKey}`, $options: "i" }, deletedAt: null },
                        { displayId: { $regex: `^${escapedSearchKey}`, $options: "i" }, deletedAt: null },
                    ],
                    deletedAt: null
                };
            };
        };

        //number of total departments
        const totalDocs = await Department.countDocuments({...searchQuery, deletedAt: null});

        //fetch paginated data
        const Departments = await Department.find({...searchQuery,deletedAt:null}).limit(perPageNumber).skip(skip).lean();


        if (Departments.length === 0) {
            return { status: false, message: "No departments found", totalDocs: 0, totalPages: 0, data: [] };
        };

        //checking number of total pages
        const totalPages = Math.ceil(totalDocs / perPageNumber);

        return {
            status: true,
            message: "Successfully fetched departments",
            data: Departments,
            metaData: {
                currentPage: pageNumber,
                perPage: perPageNumber,
                searchKey,
                totalDocs,
                totalPages,
            }
        };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getPaginatedDepartmentFn;