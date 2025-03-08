const { default: mongoose } = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const designationSchema = mongoose.Schema({
    displayId: { type: String, required: true, unique: true },
    designationName: { type: String, required: true, unique: true },
    companyId: { type: ObjectId, ref: "company", default: null, index: true },
    shortName: { type: String, unique: true },
    createdBy: { type: ObjectId, ref: "user", default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedAt: { type: Date, default: null },
    oldId: { type: String, default: null },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

//to save the designation
designationSchema.statics.insertDesignation = async function ({ userId, displayId, designationName, companyId, shortName }) {
    try {
        const designation = new this({
            displayId, designationName, companyId, shortName, createdBy: userId
        });

        //checking availability of holiday name
        // const designationNameAlreadyExists = await thisconstructor.findOne({ designationName });
        // if(designationNameAlreadyExists) return { status: false, message: "This designation name is not available."};


        const savedDesignation = await designation.save();
        return { status: true, designation: savedDesignation };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

// to update the designation
designationSchema.statics.updateDesignation = async function ({ userId, designationName, designationId, shortName }) {
    try {
        const designation = await this.constuctor.findOne({ _id: designationId, deletedAt: null });
        if (!designation) return { status: false, message: "Network problem, Try again" };

        designation.designationName = designationName;
        designation.shortName = shortName;
        designation.editedBy = userId;

        const savedDesignation = await designation.save();
        return { status: true, designation: savedDesignation };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to soft delete the designation
designationSchema.statics.softDeleteDesignation = async function ({ userId, designationId }) {
    try {
        const designation = await this.constructor.findOne({ _id: designationId, deletedAt: null });
        if (!designation) return { status: false, message: "Network problem, Try again" };

        designation.deletedAt = new Date();
        designation.deletedBy = userId;

        const savedDesignation = await designation.save();
        return { status: true, designation: savedDesignation };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness of the designation
designationSchema.statics.toggleDesignation = async function ({ userId, designationId }) {
    try {
        const designation = await this.constructor.findOne({ _id: designationId, deletedAt: null });
        if (!designation) return { status: false, message: "Network problem, Try again" };

        designation.editedBy = userId;
        designation.isActive = !designation.isActive;

        const savedDesignation = await designation.save();
        return { status: true, designation: savedDesignation };
    } catch (error) {
        return { status: false, message: error.message };
    }
};


const Designation = mongoose.model("Designation", designationSchema);

module.exports = { designationSchema, Designation };