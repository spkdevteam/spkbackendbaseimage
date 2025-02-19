const { mongoose } = require("mongoose")
const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection")


const editAPI = async ({req}) =>{
    try {
        const {id, APIName, clientId} = req.body
    
        if(!clientId) return {status:false, message: "Client ID is required"}
        if(!id) return {status:false, message: "Id is required"}
        if(!APIName) return {status:false, message: "APIName is required"}

        const db = await getClientDatabaseConnection(clientId)
        const API = await db.model("api", apiSchema)

        //check whether the id is valid or not
        if(!mongoose.Types.ObjectId.isValid(id)){
            return {status:false, message: "Invalid ID format"}
        }
        
        //check if the api name exisits or not after updating 
        const apiExists = await API.findOne({APIName})

        if(apiExists){
            return {status: false, message: "APIname already exists"}
        }

        const updateAPI = await API.findByIdAndUpdate(id, {APIName}, {new: true})
        
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