const { default: mongoose } = require("mongoose");
const { emptyStringValidation, clientIdValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const { designationSchema } = require("../../designation");

const editOneDesignationFn = async ({ userId, designationId, designationName, shortName, companyId, clientId }) => {
    try {
        //checking the ids
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(designationId):
                return { status: false, message: "Invalid designation ID" };
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user ID" };
        };

        //validating
        const validation = [
            emptyStringValidation({ string: designationName, name: "designation name: " }),
            emptyStringValidation({ string: shortName, name: "short name: " }),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //getting db connection
        const db = await getClientDatabaseConnection(clientId);
        const Designation = await db.model("Designation", designationSchema);

        // Check if the document exists and belongs to the user
        const existingDesignation = await Designation.findOne({ _id: designationId, companyId, deletedAt: null });

        if (!existingDesignation) {
            return { status: false, message: "Designation not found" };
        };

        //checking if change is needed or not
        if (existingDesignation.designationName === designationName && existingDesignation.shortName === shortName) return { status: false, message: "Nothing to change." };

        //updating the designation
        const designation = await Designation.updateDesignation({ userId, designationName, designationId, shortName });

        //checking wheather the operation was done or not
        if (!designation.status) return { status: false, message: "Failed to update the designation" };

        //returning that designation was updated
        return { status: true, message: `Designation is updated` };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editOneDesignationFn;