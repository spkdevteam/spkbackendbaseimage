const { getClientDatabaseConnection } = require("../../connection");
const { rulesSchema } = require("../../rules");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");

const getPaginatedRulesFn = async ({ page=1, perPage=10, searchKey="", clientId}) => {
    try {
        const validation = [
            clientIdValidation({ clientId }),
            emptyStringValidation({ string: searchKey, name: "Search Key: " })
        ];

        const error = validation.filter((e) => e && e.status == false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };


        const pageNumber = parseInt(page);
        const perPageNumber = parseInt(perPage);


        if (pageNumber <= 0 || pageNumber >= 500) return { status: false, message: "Invalid page number" };
        if (perPageNumber <= 0 || perPageNumber >= 500) return { status: false, message: "Invalid per page number" };

        const skip = (pageNumber - 1) * perPageNumber;

        const db = await getClientDatabaseConnection(clientId);
        const Rule = await db.model("Rule", rulesSchema);

        let searchQuery = {};
        if (searchKey.trim()) {
            const escapedSearchKey = searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            if (isNaN(searchKey)) {
                searchQuery = {
                    $or: [
                        { ruleName: { $regex: `^${escapedSearchKey}`, $options: "i" }},
                    ]
                }
            }
        };

        //number of total rules
        const totalDocs = await Rule.countDocuments({ ...searchQuery, deletedAt: null });

        //fetch paginated data
        const Rules = await Rule.find({ ...searchQuery, deletedAt: null }).limit(perPageNumber).skip(skip).lean();


        if (Rules.length === 0) {
            return { status: false, message: "No rules found", totalDocs: 0, totalPages: 0, data: [] };
        }

        //checking number of total pages
        const totalPages = Math.ceil(totalDocs / perPageNumber);

        return {
            status: true,
            message: "Successfully fetched rules",
            data: Rules,
            metaData: {
                currentPage: pageNumber,
                perPage: perPageNumber,
                searchKey,
                totalDocs,
                totalPages,
            }
        };
    } catch (error) {
        
    }
}

module.exports = getPaginatedRulesFn;