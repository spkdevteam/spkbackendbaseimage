const { getClientDatabaseConnection } = require("../../connection");
const designationSchema = require("../../designation");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");

const getPaginatedDesignationFn = async ({ page = 1, perPage = 10, searchKey = "", clientId }) => {
    try {
            const validation = [
                clientIdValidation({ clientId }),
                emptyStringValidation({ string: searchKey, name: "Search Key: " })
            ];

            const error = validation.filter((e) => e && e.status == false);
            if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };


            const pageNumber = parseInt(page);
            const perPageNumber = parseInt(perPage);


            if (pageNumber <= 0 || pageNumber >=500) return { status: false, message: "Invalid page number" };
            if (perPageNumber <= 0 || perPageNumber >=500) return { status: false, message: "Invalid per page number" };

            const skip = (pageNumber - 1) * perPageNumber;

            const db = await getClientDatabaseConnection(clientId);
            const Designation = await db.model("Designation", designationSchema);

            let searchQuery = {};
            if (searchKey.trim()) {
                const escapedSearchKey = searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                if (isNaN(searchKey)) {
                    searchQuery = {
                        $or: [
                            { title: { $regex: `^${escapedSearchKey}`, $options: "i" }, deletedAt: null },
                            { shortName: { $regex: `^${escapedSearchKey}`, $options: "i" }, deletedAt: null },
                            { displayId: { $regex: `^${escapedSearchKey}`, $options: "i" }, deletedAt: null },
                        ]
                    };
                }
            }

            //number of total departments
            const totalDocs = await Designation.countDocuments(searchQuery);

            //fetch paginated data
            const Designations = await Designation.find({ ...searchQuery, deletedAt: null }).limit(perPageNumber).skip(skip).lean();


            if (Designations.length === 0) {
                return { status: false, message: "No designations found", totalDocs: 0, totalPages: 0, data: [] };
            }

            //checking number of total pages
            const totalPages = Math.ceil(totalDocs / perPageNumber);

            return {
                status: true,
                message: "Successfully fetched departments",
                totalDocs,
                totalPages,
                currentPage: pageNumber,
                data: Designations
            };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getPaginatedDesignationFn;