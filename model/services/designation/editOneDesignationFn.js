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

        //checking wheather provided details are already being used or not
        const alreadyTitle = await Designation.findOne({ title });
        if(alreadyTitle) return { status: false, message: "This title is already occupied"};

        const alreadyShortName = await Designation.findOne({ shortName });
        if(alreadyShortName) return { status: false, message: "This short name is already occupied"};

        //updating doc
        const designation = await Designation.updateOne({ _id: id, deletedAt: null}, {$set: { title, shortName } });

        
        if(designation.modifiedCount < 1) return { status: false, message: "Updation failed."};
        //getting to doc to show it to the user
        const updatedDesignation = await Designation.findOne({ _id: id, deletedAt: null });
        //returning the doc
        return {staus: true, message: `Designation is updated`, data: updatedDesignation };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editOneDesignationFn;