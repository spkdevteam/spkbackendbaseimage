const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const { clientIdValidation } = require("../validation/validation")

const deletedUser = async({id, clientId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId})
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const User = await db.model("user", userSchema)

        const deleteUser = await User.updateOne({_id: id, deletedAt: null}, { $set: {deletedAt: Date.now()}})
        if(deleteUser.matchedCount < 1){
            return {status: false, message: "Oops try again"};
        }

        if(deleteUser.modifiedCount < 1){
            return {status: false, message: "Operation failed"}
        }

        return {status: true, message: "User deleted successfully"}

    } catch (error) {
        console.log("Error deleting user", error);
        return {status: false, message: `Fail to delete user ${error.message}`}
        
    }
}
module.exports = deletedUser