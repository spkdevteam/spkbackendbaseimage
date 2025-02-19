// const apiSchema = require("../../apiMaster")
// const { getClientDatabaseConnection } = require("../../connection")
// const apiFilter = require("../filter/apiMasterFilter")
// const paginate = require("../pagination")

// const getAllApi = async (req) =>{
//     try {
//         //extract clientId before using it
//         const clientId = req.query.clientId
//         if(!clientId) return {status:false, message: "Clinet ID is required"}

//         const db = await getClientDatabaseConnection(clientId)
//         const API = await db.model("api", apiSchema)

//         const {page= 1, perPage = 10, APIName, searchKey, path} = req.query

//         //convert to numbers 
//         const pageNumber = parseInt(page, 10)
//         const limit = parseInt(perPage, 10)

//         const filter = await apiFilter({clientId, searchKey, APIName, path})

//         //get total counts before pagination
//         const totalData = await API.countDocuments(filter)

//         //get pagination details
//         const pagination = paginate({page: pageNumber, perPage: limit, totalCounts: totalData})

//         //fetch filtered and paginated API data
//         const apiList = await API.find(filter).skip(pagination.skip).limit(pagination.limit).select("APIName _id active path metaData")

//         //calculate the current data range
//         const startRange = skip + 1
//         const endRange = Math.min(skip + apiList.length, totalData)

//         return {status: true, message: "Fetched all apis", data: apiList.map(api => ({
//             apiName: api.APIName,
//             api_id: api._id,
//             active: api.active,
//             path: api.path,
//             metaData: api.metadata
//         })),
//         metaData:{
//             page: pageNumber,
//             perPage: limit,
//             searchKey: searchKey || null,
//             totalData,
//             currentDataRange: apiList.length ? `${startRange} - ${endRange}` : "0 - 0"
//         }
//     }

//     } catch (error) {
//         console.log("Error finding getAllAPI", error);
//         return {status: false, message: "Failed to fetch getAllAPI", error: error.message}
//     }
// }

// module.exports = getAllApi