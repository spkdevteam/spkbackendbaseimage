const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection")
const { clientIdValidation } = require("../validation/validation")

const getApiById = async ({clientId, id}) =>{
    try {
        const validations = [
            clientIdValidation({clientId})
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const API = db.model("api", apiSchema)

        const apiId = await API.findOne({_id: id, $or:[{deletedAt: null}]})
        console.log(apiId);
        
        if(apiId){
            return {status: true, message: "API with this id already exists", data: apiId}
        }
        console.log(apiId, "=============================");
        
        return {status: false, message: "API with the id has been found", data: []}

    } catch (error) {
        console.log("Error in get api by id", error)
        return{status: false, message: "Failed to fetch api by id", error: error.message}
        
    }
}


module.exports = getApiById