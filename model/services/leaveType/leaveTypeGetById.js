const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const leaveTypeSchema = require("../../leaveTypeSchema");
const { clientIdValidation } = require("../validation/validation")

const leaveTypeGetById = async ({clientId, companyId, leaveId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId})
        ]
        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const leave = await db.model("leave", leaveTypeSchema)

        if(!mongoose.Types.ObjectId.isValid(leaveId)){
            return {status: false, message: "Invalid Id type"}
        }
        const leaveTypeExists = await leave.findOne({_id: leaveId, companyId: companyId, deletedAt: null})
        if(!leaveTypeExists){
            return {status: false, message: "Unable to fetch leave type by id"}
        }

        return {status: true, message: "Fetch leave type by id", data: leaveTypeExists}
    } catch (error) {
        console.log("Error in fetching Leave Type by id");
        return {status: false, message: "Failed to fetch Leave Type by id"}
    }
}
module.exports = leaveTypeGetById