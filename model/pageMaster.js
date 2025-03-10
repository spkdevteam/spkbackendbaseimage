const mongoose = require("mongoose")
const { Schema } = mongoose
const ObjectId = Schema.ObjectId

const pageMasterSchema = mongoose.Schema({
     
         
            menuName: {
                type: String,
                required: true,
                unique: true
            },
            pathName: {
                type: String,
                required: true,
                unique: true
            },
            reporting: {
                type: String,
                required: true
            },
         
     
    isActive: { type: Boolean, default: true },
    createdBy: { type: ObjectId, ref: "user", index: true },
    deletedAt: { type: Date, default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", index: true },
    editedBy: { type: ObjectId, ref: "user", index: true },
    oldId: { type: ObjectId, index: true, default: null }

},
    {
        timestamps: true
    }
);

//instance for softDelete
pageMasterSchema.methods.softDelete = async function ({userId}) {
    try {
        if (this.deletedAt !== null) {
            return { status: false, message: "Page already deleted" };
        }
        this.deletedAt = new Date();
        this.deletedBy = userId;
        await this.save();

        return { status: true, message: "Page deleted successfully", data: this };
    } catch (error) {
        return { status: false, message: "Failed to delete page", error: error.message };
    }
};

//instance for edit
pageMasterSchema.methods.edit = async function ({userId, updatedData}) {
    try {
        const updatedPage = await this.constructor.findOneAndUpdate(
            { _id: this._id },  
            { ...updatedData, editedBy: userId },
            { new: true} 
        );

        if (!updatedPage) {
            return { status: false, message: "Page not found" };
        }

        return { status: true, message: "Page edited successfully", data: updatedPage };
    } catch (error) {
        return { status: false, message: "Failed to edit page", error: error.message };
    }
};


//instance for insert
pageMasterSchema.methods.insert = async function ({ newPage, userId }) {
    try {
        // Check for duplicate page
        const existingPage = await this.constructor.findOne({
            $or: [{ menuName: newPage.menuName }, { pathName: newPage.pathName }],
        });

        if (existingPage) {
            return { status: false, message: "Page with menuName or pathName already exists" }
        }

        // Create new page instance
        const newPageData = new this.constructor({
            menuName: newPage.menuName,
            pathName: newPage.pathName,
            reporting: newPage.reporting,
            createdBy: userId,
            oldId
        });

        const result = await newPageData.save();
        return { status: true, message: "Page created successfully", data: result }
    } catch (error) {
        return { status: false, message: "Failed to create page", error: error.message }
    }
};

//instance for toggle
pageMasterSchema.methods.toggle = async function ({userId}) {
    try {
        this.isActive = !this.isActive
        this.editedBy = userId

        await this.save();
        return { status: true, message: "Page status toggled", data: this }
    } catch (error) {
        return { status: false, message: "Failed to toggle page status", error: error.message }
    }
};

const pageMasterModel = mongoose.model("Page", pageMasterSchema);
module.exports = { pageMasterModel,pageMasterSchema };