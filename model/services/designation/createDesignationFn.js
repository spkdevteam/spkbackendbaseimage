const { getClientDatabaseConnection } = require("../../connection");
const designationSchema = require("../../designation");
const getserialNumber = require("../../serialNumber.jss/getSerialNumber");
const { emptyStringValidation, booleanValidation, clientIdValidation } = require("../validation/validation");

const createDesignationFn = async ({ title, companyId, shortName, isActive, clientId }) => {
    try {
        const validation = [
            emptyStringValidation({ string: title, name: "Title: "}),
            emptyStringValidation({ string: title, name: "Short name: "}),
            booleanValidation({ boolean: typeof isActive === "string" ? isActive.toLowerCase() : isActive , name: "Active status: "}),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };


        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Designation", designationSchema);

        const alreadyExists = await Department.findOne({ title });

        if(alreadyExists) return { status: false, message: "This title already exists."};

        const serialNumber = await getserialNumber("designation", clientId, "");

        const absSerialNumber = Math.abs(serialNumber);

        const designation = new Department({
            title,
            companyId,
            shortName,
            displayId: absSerialNumber,
            isActive: isActive === "true" ? true : false,
        });

        const savedDesignation = await designation.save();

        return { status: true, message: "Designation created successfully", data: savedDesignation };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createDesignationFn;