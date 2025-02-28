const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const designationSchema = require("../../designation");
const { clientIdValidation } = require("../validation/validation");

const getOneDesignationFn = async ({ id, clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId })
        ];


        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map(e=>e.message).join(", ")};


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid rule ID" };
        };


        const db = await getClientDatabaseConnection(clientId);
        const Designation = await db.model("Designation", designationSchema);


        const designation = await Designation.findOne({ _id: id, deletedAt: null });

        if(!designation) return { status: false, message: "Error occurred" };

        return { status: true, message: "Designation is here", data: designation };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getOneDesignationFn;