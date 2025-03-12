const { getClientDatabaseConnection } = require("../../connection");
const userSchema = require("../../userSchema");
const { clientIdValidation } = require("../validation/validation");

const logOut = async ({clientId, userId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId}),
        ]

        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(",")};

        // Get database connection
        const db = await getClientDatabaseConnection(clientId);
        const User = db.model("User", userSchema);

        const user = await User.findById(userId)
        if(!user){
            return {status: false, message: "User not found"}
        }
        return {status: true, message: "User logged out successfully"}
    } catch (error) {
        console.log("Error in user logout");
        return {status: false, message: "Failed to logout user"}
    }
}
module.exports = logOut