const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { designationSchema } = require("../../designation");
const { clientIdValidation } = require("../validation/validation");

const getOneDesignationFn = async ({ designationId, clientId }) => {
    try {
        //validating the ids
        if (!mongoose.Types.ObjectId.isValid(designationId)) {
            return { status: false, message: "Invalid designation ID" };
        };
        //validating clientId
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map(e=>e.message).join(", ")};

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const Designation = await db.model("Designation", designationSchema);

        //getting one designation
        const designation = await Designation.findOne({ _id: designationId, deletedAt: null });

        if(!designation) return { status: false, message: "Error occurred" };

        return { status: true, message: "Designation is here", data: designation };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getOneDesignationFn;