const apiSchema = require("../../apiMaster")
const { getClientDatabaseConnection } = require("../../connection")
const { clientIdValidation } = require("../validation/validation")

const toggleApiStatus = async ({ clientId, id }) => {
    try {
        const validations = [
            clientIdValidation({ clientId })
        ]

        const error = validations.filter((e) => e && e.status === false)
        if (error.length > 0) return { status: false, message: error.map((e) => e.message).join(", ") }

        const db = await getClientDatabaseConnection(clientId)
        const API = await db.model("api", apiSchema)

        const apiId = await API.findById(id)

        if (!apiId) {
            return { status: false, message: "Api not found" }
        }
        apiId.isActive = !apiId.isActive
        await apiId.save()
        return { status: true, message: `Api Status updated successfully`, data:{currentStatus: apiId.isActive ? "Active" : "Deactive"} }
    } catch (error) {
        console.log("Error in toggling the api status", error);
        return { status: false, message: "Failed to toggle api status", error: error.message }

    }
}

module.exports = toggleApiStatus