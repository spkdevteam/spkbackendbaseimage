const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")

const createAPI = async ({APIName, path, clientId}) =>{
    console.log("client id:", clientId);
    
    try {
        if(!clientId) return {status: false, message: "Some network credential are missing"}

        //connect to the db
        const db = await getClientDatabaseConnection(clientId)
        const API = await db.model("api", apiSchema)
        const User = await db.model("user", userSchema)

        //handel error
        if(!APIName || !path){
            return {status: false, message: "APIName and path is required"}
        }

        //check if the name exists or not
        const apiExists = await API.findOne({APIName})
        console.log("api exists:",apiExists);
        
        if(apiExists){
            return {status: false, message: "APIName already exists for this client"}
        }
        const apiMaster = new API({
            APIName,
            path
        })

        const result = await apiMaster.save()
        console.log(result._id);
        

        return {status: true, message: "API created successfully", data:{_id:result._id}}

    } catch (error) {
        console.log("Error creating the apiMaster", error);
        return {status: false, message: "Internal Server Error", error: error.message}
        
    }
}

module.exports = createAPI