const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
require("dotenv").config()

const getUserAll = async ({clientId}) =>{
    try {
        if(!clientId) return {status: false, message: "Client Id is required"}
        
        //fetch all users from the database
        const db = await getClientDatabaseConnection(clientId)
        const User = db.model("User", userSchema)
        const fetchUsers = await User.find({})

        //fetch users
        if(fetchUsers.length > 0){
            return {status: true, message: "Fetched all user", data: fetchUsers}
        }else {
            return { status: false, message: "No users found", data: [] };
        }
    } catch (error) {
        console.log("Error fetching users:", error);
        return { status: false, message: "Failed to fetch users", error: error.message } 
    }
}


module.exports = {getUserAll}