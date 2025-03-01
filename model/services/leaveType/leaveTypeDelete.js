const { getClientDatabaseConnection } = require("../../connection")
const leaveTypeSchema = require("../../leaveTypeSchema")
const { clientIdValidation } = require("../validation/validation")

const leaveTypeDelete = async ({clientId, companyId, leaveId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId})
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.lenght > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const leave = await db.model("leave", leaveTypeSchema)

        const deletedLeaveType = await leave.findOneAndUpdate({_id: leaveId, deletedAt:null}, {$set: {deletedAt: Date.now()}}, {new: true})
        if(!deletedLeaveType){
            return {status: false, message: "Unable to delete leave type"}
        }

        return {status: true, message: "Leave type deleted successfully"}
    } catch (error) {
        console.log("Error in deleteing leave type");
        return {status: false, message: "Failed to delete leave type"}
    }
}
module.exports = leaveTypeDelete