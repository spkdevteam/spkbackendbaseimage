const { getClientDatabaseConnection } = require("../../connection");
const { userSchema } = require("../../userSchema");
const { clientIdValidation, mongoIdValidation } = require("../validation/validation");

const userToggle = async ({ clientId, editedBy, companyId, userId }) => {
    try {
        const validations = [
            clientIdValidation({ clientId }),
            mongoIdValidation({ _id: companyId }),
            mongoIdValidation({ _id: editedBy }),
            mongoIdValidation({ _id: userId })
        ]

        const error = validations.filter((e) => e && e.status === false)
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") }
        console.log("error===========", error);

        const db = await getClientDatabaseConnection(clientId)
        const User = await db.model("User", userSchema)

        const toggle = await User.toggleUser({ userId, toggledByUser: editedBy, companyId })
        if (!toggle?.status) {
            return { status: false, message: "Unable to toggle User!!" }
        }
        return { status: true, message: "User toggled successfully" }
    } catch (error) {
        console.log("Error in verifying the user", error);
        return { status: false, message: "Failed to verify the user", error: error.message }
    }
}
module.exports = userToggle