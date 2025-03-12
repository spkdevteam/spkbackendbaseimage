const { getClientDatabaseConnection } = require("../../connection")
const leaveTypeSchema = require("../../leaveTypeSchema")
const { clientIdValidation, stringValidation, stringValidationWithSpace } = require("../validation/validation")

const leaveTypeCreate = async ({leaveName, leaveType, companyId, clientId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId}),
            stringValidationWithSpace({string: leaveName, name: "leaveName: "}),
            stringValidationWithSpace({string: leaveType, name: "leaveType: "})
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const leave = await db.model("leave", leaveTypeSchema)

        const leaveTypeExists = await leave.findOne({leaveName})
        if(leaveTypeExists){
            return {status: false, message: "Leave Type already exists"}
        }

        const newLeaveType = new leave({
            leaveName,
            leaveType,
            companyId,
            clientId
        })

        const result = await newLeaveType.save()
        return {status: true, message: "leaveType created successfully", data:{_id: result._id}}
    } catch (error) {
        console.log("Error in creating leaveType", error);
        return {status: false, message: "Failed to create leaveType", error: error.message}
    }
}
module.exports = leaveTypeCreate 