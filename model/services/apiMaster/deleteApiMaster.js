const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection")

const softDeleteAPI = async ({req, clientId}) =>{
    try {
        console.log("client id:", clientId);
        
        const {id} = req.params
        if(!clientId) return {status: false, message: "Client ID is required"}

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
        return {status: false, message: "Internal Server Error", error: error.message}
    }
}

module.exports = softDeleteAPI