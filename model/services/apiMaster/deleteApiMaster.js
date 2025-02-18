// const apiSchema = require("../../apiMaster")
// const { getClientDatabaseConnection } = require("../../connection")

// const deleteAPI = async ({req, clientId}) =>{
//     try {
//         const {clientId, id: apiId} = req.params
//         if(!clientId) return {status: false, message: "Client ID is required"}

//         const db = await getClientDatabaseConnection(clientId)
//         const API = await db.model("api", apiSchema)

        

//         const api = await API.findOne({ _id: id})
//         if(!api){
//             return {status: false, message: "No associated api"};
//         }

//         if(api.deletedAt !== null){
//             return {status: false, message: "This api was deleted"};
//         }


//         const updatedApi = await API.findOneAndUpdate({ _id:id}, { deletedAt: Date.now()}, { new: true});

//         if(updatedApi.deletedAt !== null) return {status:false, message: "api is deleted"}
//     } catch (error) {
//         console.log("Error deleting the apiMaster", error);
//         return {status: false, message: "Internal Server Error", error: error.message}
//     }
// }

// module.exports = deleteAPI