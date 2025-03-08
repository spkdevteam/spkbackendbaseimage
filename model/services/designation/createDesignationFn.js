const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { designationSchema } = require("../../designation");
const getserialNumber = require("../../serialNumber.jss/getSerialNumber");
const { emptyStringValidation, clientIdValidation } = require("../validation/validation");

const createDesignationFn = async ({ _id = null, userId, designationName, companyId, shortName, clientId }) => {
    try {
        //checking the ids
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id" };
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company id" };
        };

        //checking the validations
        const validation = [
            emptyStringValidation({ string: designationName, name: "designation name: " }),
            emptyStringValidation({ string: shortName, name: "Short name: " }),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //checkking that if the _id is there then validate it
        if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
            return { status: false, message: "Wrong _id, while copying from db" };
        }

        //establishing db connection
        const db = await getClientDatabaseConnection(clientId);
        const Designation = await db.model("Designation", designationSchema);

        //if designation name already exists in the company
        const designationNamealreadyExists = await Designation.findOne({ designationName, companyId, deletedAt: null });
        if (designationNamealreadyExists) return { status: false, message: "This designation name already exists." };

        //if short name already exists in the company
        const shortNamealreadyExists = await Designation.findOne({ shortName, companyId, deletedAt: null });
        if (shortNamealreadyExists) return { status: false, message: "This short name already exists." };

        //generating sr number(for now it is not working)
        const serialNumber = await getserialNumber("Designation", clientId, "");

        //making it an absolute value
        const absSerialNumber = Math.abs(serialNumber);
        const savedDesignation = await Designation.insertDesignation({ _id, userId, displayId: absSerialNumber, designationName, companyId, shortName });

        if (!savedDesignation.status) return { status: false, message: "Failed to save the designation" };

        return { status: true, message: "Designation created successfully", data: savedDesignation.message };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createDesignationFn;