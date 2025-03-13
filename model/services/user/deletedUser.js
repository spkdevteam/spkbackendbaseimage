const { getClientDatabaseConnection } = require("../../connection")
const {userSchema} = require("../../userSchema")
const { clientIdValidation, mongoIdValidation } = require("../validation/validation")
const getUserId = require("./getUserById")

const deletedUser = async({id, clientId, deletedBy}) =>{
    try {
        const validations = [
            clientIdValidation({clientId}),
            mongoIdValidation({_id: id}),
            mongoIdValidation({_id: deletedBy})
        ]
        const error = validations.filter((e) => e && e.status === false)
        if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}

        const db = await getClientDatabaseConnection(clientId)
        const User = await db.model("user", userSchema)

        const deleteUser = await User.softDeleteUser({userId: id, deletedById : deletedBy, clientId : clientId })
        console.log("deleted Useeeeeeeeeeeeeeeeeeer", deleteUser);
        if(!deleteUser?.status)
        {
            console.log("////////////////////////////////////////");
            return {status: false, message: "Unable to delete User!"}    
        }
        console.log("=======================================================");
        return {status: true, message: "User deleted successfully"}

    } catch (error) {
        console.log("Error deleting user", error);
        return {status: false, message: `Fail to delete user ${error.message}`}
        
    }
}
module.exports = deletedUser