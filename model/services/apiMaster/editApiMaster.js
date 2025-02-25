const { mongoose } = require("mongoose")
const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection")
const { clientIdValidation } = require("../validation/validation")


const editAPI = async ({id, APIName, path, clientId}) =>{
    try {
        // const {id, APIName, clientId} = data
    
        const validations = [
            clientIdValidation({clientId})
        ]

        const error = validations.filter((e) => e && e.status == false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(",")}
        if(!id) return {status:false, message: "Id is required"}
        if(!APIName && !path) return {status:false, message: "Either APIName or path is required"}

        const db = await getClientDatabaseConnection(clientId)
        const API = await db.model("api", apiSchema)

        //check whether the id is valid or not
        if(!mongoose.Types.ObjectId.isValid(id)){
            return {status:false, message: "Invalid ID format"}
        }
        //find existing api master entry
        const existingApi = await API.findById(id)
        if(!existingApi){
            return {status: false, message: "Api master not found"}
        }
        
        //check uniqueness for apiName and path before updating
        if(APIName !== existingApi.APIName || path !== existingApi.path){
            const duplicateApi = await API.findOne({
                $or:[{APIName}, {path}],
                _id: {$ne: id}
            })
            if (duplicateApi) {
                return { status: false, message: "APIName or path already exists" };
            }
        }

        //prepare update data
        const updateData = {}
        if(APIName){
            updateData.APIName = APIName
        } 
        if(path) {
            updateData.path = path
        }
        console.log(path);
        

        const updateAPI = await API.findByIdAndUpdate(id, updateData, {new: true})
        
        if(!updateAPI){
            return {status: false, message: "API Id has not been updated"}
        }

        return {status: true, message: "API has been updated successfully"}

    } catch (error) {
        console.log("Error in editing APIMaster",error);
        return {status: false, message: "Fail to edit apiMaster"}
    }
}

module.exports = editAPI