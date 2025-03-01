const mongoose = require("mongoose")
const { getClientDatabaseConnection } = require("../../connection")
const leaveTypeSchema = require("../../leaveTypeSchema")
const { clientIdValidation, stringValidationWithSpace } = require("../validation/validation")

const leaveTypeEdit = async ({leaveName, leaveType, clientId, companyId, leaveId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId}),
            stringValidationWithSpace({string: leaveName, name: "leaveName: "}),
            stringValidationWithSpace({string: leaveType, name: "leaveType: "})
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.lenght > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const leave = await db.model("leave", leaveTypeSchema)

        if(!mongoose.Types.ObjectId.isValid(leaveId)){
            return {status: false, message: "Invalid id type"}
        }
        const leaveTypeExists = await leave.findOne({_id: leaveId, deletedAt: null})
        if(!leaveTypeExists){
            return {status: false, message: "Leave id not found or it is deleted"}
        }

        const updatedLeaveType = await leave.findByIdAndUpdate(leaveId,{
            leaveName, leaveType, clientId, companyId, leaveId
        }, {new: true})

        if(!updatedLeaveType){
            return {status: false, message: "Unable to update the leaveType"}
        }
        return {status: true, message: "Leave type updated successfully"}
    } catch (error) {
        console.log("Error in updating Leave Type");
        return {status: false, message: "Failed to update Leave Type"}
    }
}
module.exports = leaveTypeEdit