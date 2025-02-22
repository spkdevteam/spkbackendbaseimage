const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const designationSchema = require("../../designation");
const { clientIdValidation } = require("../validation/validation");

const deleteDesignationFn = async ({ id, clientId }) => {
    try {
        console.log(id, clientId)
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid designation ID" };
        }

        const db = await getClientDatabaseConnection(clientId);
        const Designation = db.model("Designation", designationSchema);

        const designation = await Designation.updateOne({ _id: id, deletedAt: null }, { deletedAt: Date.now() });

        if (designation.modifiedCount < 1) return { status: false, message: "Operation failed!!" };

        return { status: true, message: "Designation deleted Succesfully" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = deleteDesignationFn;