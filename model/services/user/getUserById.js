const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
require("dotenv").config()

const getUserId = async ({clientId, id}) =>{
    try {
        if(!clientId) return {status: false, message: "Client Id is required"}
        // if (!req || !req.params || !req.params.id) {
        //     return { status: false, message: "Request object or ID missing" };
        // }
        
        //extracting the id from params
        // const {id} = req.params
        
        //fetch user by id from the database
        const db = await getClientDatabaseConnection(clientId)
        const User = db.model("User", userSchema)
        const fetchUserById = await User.findById(id);

        if(fetchUserById){
            return {status: true, message: "Fetch the user by id", data: fetchUserById}
        }else{
            return {status: false, message: "Could not find user by id", data: []}
        }
    } catch (error) {
        console.log("Error fetching users:", error);
        return { status: false, message: "Failed to fetch users by id", error: error.message }
    }
}

module.exports = getUserId