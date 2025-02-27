const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection")
const paginate = require("../pagination")
const { clientIdValidation, stringValidation, stringValidationWithEmptyString } = require("../validation/validation")

const getAllApi = async ({clientId, searchKey="", page = 1, perPage = 10}) =>{
    try {
        console.log(searchKey, "searchKey =========================");
        
        const validations = [
            clientIdValidation({clientId}),
            stringValidationWithEmptyString({string: searchKey, name: "searchKey: "})
        ]
        //check the validation error
        console.log(validations,'444444');
        
        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ")};
        console.log(error,'->error');

        const db = await getClientDatabaseConnection(clientId)
        const API = await db.model("api", apiSchema)

         // Convert pagination values to numbers
         const pageNumber = parseInt(page, 10) || 1;
         const limit = parseInt(perPage, 10) || 10;

         if(pageNumber <= 0) return {status: false, message: "Invalid page number"}
         if(limit <= 0) return {status: false, message: "Invalid limit"} 

        const filter = {deletedAt: null};
        if (searchKey && searchKey.trim()) {
            searchKey = searchKey.replace(/^"|"$/g, "").trim()
            filter["$or"] = [
                { APIName: { $regex: searchKey, $options: "i" } },
                { path: { $regex: searchKey, $options: "i" } }
                
            ];
        }
        console.log(filter, "filter ========================");
        
        //get total counts before pagination
        const totalData = await API.countDocuments(filter)

        //get pagination details
        const pagination = paginate({page: pageNumber, perPage: limit, totalCounts: totalData})

        //fetch filtered and paginated API data
        const apiList = await API.find(filter).skip(pagination.skip).limit(pagination.limit).select("APIName path metaData").lean()
        console.log(apiList);
        
        const totalPage = Math.ceil(totalData / perPage)
            return {status: true, message: "Fetched all apis", data: apiList.map(api => ({
                apiName: api.APIName,
                api_id: api._id,
                active: api.active,
                path: api.path,
                metaData: api.metaData
            })),
            metaData:{
                page: pageNumber,
                perPage: limit,
                searchKey: searchKey,
                totalData,
                totalPage
            }
    }

    } catch (error) {
        console.log("Error finding getAllAPI", error);
        return {status: false, message: "Failed to fetch getAllAPI", error: error.message}
    }
}

module.exports = getAllApi
