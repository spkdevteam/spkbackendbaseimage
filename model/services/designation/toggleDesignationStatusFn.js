const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { designationSchema } = require("../../designation");
const { clientIdValidation } = require("../validation/validation");

const toggleDesignationStatusFn = async ({ userId, designationId, clientId }) => {
    try {
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id, try again" };
            case !mongoose.Types.ObjectId.isValid(designationId):
                return { status: false, message: "Invalid designation id, try again" };
        };

        const clientIdValidationVar = clientIdValidation({ clientId });
        if (!clientIdValidationVar.status) return { status: false, message: "Networking problem, try again" };

        const db = await getClientDatabaseConnection(clientId);
        const Designation = await db.model("designation", designationSchema);

        const designation = await Designation.findOne({ _id: designationId, deletedAt: null });

        if (!designation) return { status: false, message: "No such apis" };

        const toggledDesignation = await Designation.toggleDesignation({ userId, designationId });

        if (!toggledDesignation.status) return { status: false, message: "Failed to toggle the apis status" };

        return { status: true, message: "Successfully toggled the api status" };
    } catch (error) {
        return {status: false, message: error.message};
    }
}


module.exports = toggleDesignationStatusFn;