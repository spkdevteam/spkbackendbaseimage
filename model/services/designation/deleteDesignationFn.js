const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { designationSchema } = require("../../designation");
const { clientIdValidation } = require("../validation/validation");

const deleteDesignationFn = async ({ userId, designationId, clientId }) => {
    try {
        //checking the ids
        switch(true){
            case !mongoose.Types.ObjectId.isValid(designationId):
                return { status: false, message: "Invalid designation ID"};
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user ID"};
        };

        //validating clientId
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //establishing the connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const Designation = db.model("Designation", designationSchema);

        //performing soft delete
        const designation = await Designation.softDeleteDesignation({ userId, designationId });

        //checking wheather deletion was proper or not
        if (!designation.status) return { status: false, message: "Operation failed!!" };

        return { status: true, message: "Designation deleted Succesfully" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = deleteDesignationFn;