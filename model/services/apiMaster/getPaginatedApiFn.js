const { apiSchema } = require("../../apiMaster");
const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");

const getPaginatedApiFn = async ({ page = 1, perPage = 10, searchKey = "", clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId }),
            emptyStringValidation({ string: searchKey, name: "searchkey: " })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.message };

        const pageNumber = parseInt(page);
        const perPageNumber = parseInt(perPage);


        if (pageNumber <= 0) return { status: false, message: "Invalid page number" };
        if (perPageNumber <= 0) return { status: false, message: "Invalid per page number" };

        const skip = (pageNumber - 1) * perPageNumber;

        const db = await getClientDatabaseConnection(clientId);
        const apiMaster = await db.model("api", apiSchema);


        let searchQuery = {};
        if (searchKey.trim()) {
            const escapedSearchKey = searchKey.replace(/([.*+?^${}()|[\]\\])(?!\/)/g, '\\$1');

            // We don't need the ^ anchor for matching from the start, because it can cause issues
            // when applied to apiPath values starting with '/'
            const regex = new RegExp(escapedSearchKey, 'i'); // case-insensitive regex

            if (isNaN(searchKey)) {
                searchQuery = {
                    $or: [
                        { apiName: { $regex: regex } },
                        { apipath: { $regex: regex } },
                    ]
                };
            }
        }

        // Number of total departments
        const totalDocs = await apiMaster.countDocuments({ ...searchQuery, deletedAt: null });

        // Fetch paginated data
        const apiMasters = await apiMaster.find({ ...searchQuery, deletedAt: null })
            .limit(perPageNumber)
            .skip(skip)
            .lean();



        if (apiMasters.length === 0) {
            return { status: false, message: "No apis found", totalDocs: 0, totalPages: 0, data: [] };
        }

        //checking number of total pages
        const totalPages = Math.ceil(totalDocs / perPageNumber);

        return {
            status: true,
            message: "Successfully fetched apis",
            data: apiMasters,
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

module.exports = getPaginatedApiFn;