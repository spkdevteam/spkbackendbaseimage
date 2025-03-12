const { getClientDatabaseConnection } = require("../../connection")
const leaveTypeSchema = require("../../leaveTypeSchema")
const paginate = require("../pagination")
const { clientIdValidation, stringValidationWithEmptyString } = require("../validation/validation")

const leaveTypeGetAll = async ({ page = 1, perPage = 10, searchKey = "", clientId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId}),
            stringValidationWithEmptyString({string: searchKey, name: "searchKey: "})
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const leave = await db.model("leave", leaveTypeSchema)

        const pageNumber = parseInt(page, 10) || 1
        const limit = parseInt(perPage, 10) || 10

        if(pageNumber <= 0) return {status: false, message: "Invalid page number"}
        if(limit <= 0) return {status: false, message: "Invalid limit"}

        const filter = {deletedAt: null}
        if(searchKey && searchKey.trim()){
            filter["$or"] = [
                { leaveName: { $regex: searchKey, $options: "i" } },
                { leaveType: { $regex: searchKey, $options: "i" } }
            ]
        }

        //get total counts before pagination
        const totalData = await leave.countDocuments(filter)

        //get paginated details
        const pagination = paginate({page: pageNumber, perPage: limit, totalCounts: totalData})

        //fetch filter and paginated data
        const leaveTypes = await leave.find(filter).skip(pagination.skip).limit(pagination.limit).select("leaveName leaveType").lean()
        
        const totalPage = Math.ceil(totalData/ perPage)
        return {status: true, message: "Fetched all leaves", data: leaveTypes.map(leaves => ({
            leaveName: leaves.leaveName,
            leaveType: leaves.leaveType,
            metaData: leaves.metaData
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
        console.log("Error in fetching Leave Type");
        return {status: false, message: "Failed to fetch Leave Type"}
    }
}
module.exports = leaveTypeGetAll