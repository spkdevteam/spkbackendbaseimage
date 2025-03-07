const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { designationSchema } = require("../../designation");
const getserialNumber = require("../../serialNumber.jss/getSerialNumber");
const { emptyStringValidation, clientIdValidation } = require("../validation/validation");

const createDesignationFn = async ({ _id = null, userId, designationName, companyId, shortName, clientId }) => {
    try {
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id" };
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company id" };
        };

        const validation = [
            emptyStringValidation({ string: designationName, name: "designation name: " }),
            emptyStringValidation({ string: shortName, name: "Short name: " }),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        const db = await getClientDatabaseConnection(clientId);
        const Designation = await db.model("Designation", designationSchema);

        const designationNamealreadyExists = await Designation.findOne({ designationName, companyId, deletedAt: null });
        if (designationNamealreadyExists) return { status: false, message: "This designation name already exists." };


        const shortNamealreadyExists = await Designation.findOne({ shortName, companyId, deletedAt: null });
        if (shortNamealreadyExists) return { status: false, message: "This short name already exists." };

        const serialNumber = await getserialNumber("Designation", clientId, "");

        const absSerialNumber = Math.abs(serialNumber);

        const savedDesignation = await Designation.insertDesignation({ _id, userId, displayId: absSerialNumber, designationName, companyId, shortName });

        if (!savedDesignation.status) return { status: false, message: "Failed to save the designation" };

        return { status: true, message: "Designation created successfully", data: savedDesignation };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createDesignationFn;