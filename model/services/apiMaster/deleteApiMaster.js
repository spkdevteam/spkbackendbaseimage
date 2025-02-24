const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection");
const { clientIdValidation } = require("../validation/validation");

const softDeleteAPI = async ({id, clientId}) =>{
    try {
        console.log("client id:", clientId);
        
        const validations = [
            clientIdValidation({clientId})
        ]

        const error = validations.filter((e) => e && e.status == false)
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(",")}

        const db = await getClientDatabaseConnection(clientId)
        const API = await db.model("api", apiSchema)

        const api = await API.findById(id)
        if(!api){
            return {status: false, message: "No associated api"};
        }

        if(api.deletedAt){
            return {status: false, message: "This api was deleted"};
        }
        
        await api.softDelete()
        return {status: true, message: "API deleted successfully", data: api}
    } catch (error) {
        console.log("Error deleting the apiMaster", error);
        return {status: false, message: "Fail to delete api master", error: error.message}
    }
}

module.exports = softDeleteAPI