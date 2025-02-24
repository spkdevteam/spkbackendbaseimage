const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { clientIdValidation } = require("../validation/validation")
require("dotenv").config()

const getUserId = async ({clientId, id}) =>{
    try {
        const validations = [
            clientIdValidation({clientId})
        ]
        const error = validations.filter((e) => e && e.status == false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}
        //fetch user by id from the database
        const db = await getClientDatabaseConnection(clientId)
        const User = db.model("User", userSchema)
        const fetchUserById = await User.findOne({_id: id, $or: [{deletedAt: null}]});

        if(fetchUserById){
            return {status: true, message: "Fetch the user by id", data: fetchUserById}
        }else{
            return {status: false, message: "User not found or may have been deleted", data: []}
        }

    } catch (error) {
        console.log("Error fetching users:", error);
        return { status: false, message: "Failed to fetch users by id", error: error.message }
    }
}

module.exports = getUserId