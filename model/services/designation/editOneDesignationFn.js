const { default: mongoose } = require("mongoose");
const { emptyStringValidation, clientIdValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const designationSchema = require("../../designation");

const editOneDesignationFn = async ({ id, title, shortName, clientId }) => {
    try {
        //validating
        const validation = [
            emptyStringValidation({ string: title, name: "Title: " }),
            emptyStringValidation({ string: shortName, name: "Short name: " }),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //checking authenticity of passed document id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid designation ID" };
        };

        //getting db connection
        const db = await getClientDatabaseConnection(clientId);
        const Designation = await db.model("Designation", designationSchema);

        // Check if the document exists and belongs to the user
        const existingDesignation = await Designation.findOne({ _id: id, deletedAt: null });
        
        if (!existingDesignation) {
            return { status: false, message: "Designation not found" };
        }

        if(existingDesignation.title === title && existingDesignation.shortName === shortName) return { status: false, message: "No change done."};

        // Check if the user is trying to update their own designation
        // Check title
        if (existingDesignation.title !== title) {
            const alreadyTitle = await Designation.findOne({ title });
            if (alreadyTitle && alreadyTitle._id.toString() !== id) {
                return { status: false, message: "This title is already occupied by another user" };
            }
        }

        // Check short name
        if (existingDesignation.shortName !== shortName) {
            const alreadyShortName = await Designation.findOne({ shortName });
            if (alreadyShortName && alreadyShortName._id.toString() !== id) {
                return { status: false, message: "This short name is already occupied by another user" };
            }
        }

        //updating doc
        const designation = await Designation.updateOne({ _id: id, deletedAt: null}, {$set: { title, shortName } });

        if(designation.modifiedCount > 0) return { status: true, message: "Successfully updated designation"};

        //returning the doc
        return {staus: true, message: `Designation is updation failed`};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editOneDesignationFn;