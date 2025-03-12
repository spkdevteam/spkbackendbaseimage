const { getClientDatabaseConnection } = require("../../connection");
const { pageMasterSchema } = require("../../pageMaster")
const { stringValidationIncludingNumber, clientIdValidation, emptyStringValidation } = require("../validation/validation")

const getPaginatedPagesMasterFn = async ({page = 1, perPage = 10, searchKey = "", clientId})=>{
    try{
        const validation = [
            clientIdValidation({ clientId }),
            // emptyStringValidation({string:page, name: "page"}),
            // emptyStringValidation({string:perPage, name: "perPage"}),
            emptyStringValidation({string:searchKey, name: "searchKey"}),
        ];
        const error = validation.filter((e) => e && e.status == false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };


        const pageNumber = parseInt(page);
        const perPageNumber = parseInt(perPage);    


        if (pageNumber <= 0 || pageNumber >= 500) return { status: false, message: "Invalid page number" };
        if (perPageNumber <= 0 || perPageNumber >= 500) return { status: false, message: "Invalid per page number" };

        const skip = (pageNumber - 1) * perPageNumber;

        const db = await getClientDatabaseConnection(clientId);
        const PageMasterModelObj = await db.model("Page", pageMasterSchema);

        let searchQuery = {};
        if (searchKey.trim()) {
            const escapedSearchKey = searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); //ask SIR about slashes

            if (isNaN(searchKey)) {
                searchQuery = {
                    $or: [//case insensitive searching and searching from anywhere of the target field
                        { menuName: { $regex: escapedSearchKey, $options: "i" }},
                        { pathName: { $regex: escapedSearchKey, $options: "i" }},
                        { reporting: { $regex: escapedSearchKey, $options: "i" }},
                    ]
                }
            }
        };

        //number of total PagesMaster docuemnts
        const totalDocs = await PageMasterModelObj.countDocuments({ ...searchQuery, deletedAt: null });

        //fetch paginated data
        const PageMasterDocs = await PageMasterModelObj.find({ ...searchQuery, deletedAt: null }).limit(perPageNumber).skip(skip).lean();


        if (PageMasterDocs.length === 0) {
            return { status: false, message: "No Pages found", totalDocs: 0, totalPages: 0, data: [] };
        }

        //checking number of total pages
        const totalPages = Math.ceil(totalDocs / perPageNumber);

        return {
            status: true,
            message: "Successfully fetched Pages",
            data: PageMasterDocs,
            metaData: {
                currentPage: pageNumber,
                perPage: perPageNumber,
                searchKey,
                totalDocs,
                totalPages,
            }
        };

    }
    catch(error){
        return { status: false, message: error.message };
    }

}
module.exports = getPaginatedPagesMasterFn;