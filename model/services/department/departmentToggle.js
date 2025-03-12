const { getClientDatabaseConnection } = require("../../connection")
const { departmentSchema } = require("../../department")
const { clientIdValidation, mongoIdValidation } = require("../validation/validation")

const departmentToggle = async ({clientId, departmentId, userId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId}),
            mongoIdValidation({_id: departmentId}),
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.lenght > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const department = await db.model("Department", departmentSchema)

        const toggle = await department.toggleDepartment({userId, departmentId: departmentId})
        console.log("first", toggle);
        

        if(!toggle?.status){
            return {status: false, message: "Unable to toggle Department"}
        }

        return {status: true, message: "Department toggled successfully"}

    } catch (error) {
        console.log("Error in toggling Department", error);
        return { status: false, message: "Failed to toggle Department", error: error.message }
    }
}

module.exports = departmentToggle