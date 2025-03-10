const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const documentMasterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        property: {
            type: ObjectId,
            ref: "documentproperties",
            default: null,
            index: true
        },
        mandatory: {
            type: Boolean,
            // default: false,
            required: true
        },
        companyId: {
            type: ObjectId,
            ref: "Company",
            default: null,
            index: true
        },
        isActive: { type: Boolean, default: true },
        createdBy: { type: ObjectId, ref: "user", index: true },
        deletedAt: { type: Date, default: null, index: true },
        editedBy: { type: ObjectId, ref: "user", index: true },
        oldId: { type: ObjectId, index: true, default: null }
    },
    { timestamps: true }
);

// Instance method for soft delete
documentMasterSchema.methods.softDelete = async function ({userId}) {
    try {
        if(this.deletedAt !== null){
            return {status: false, message: "Document master already deleted"}
        }
        this.deletedAt = new Date()
        this.deletedBy = userId
        await this.save()
        return {status: true, message: "Document master deleted successfully", data: this}
    } catch (error) {
        return {status: false, message: "Failed to delete Document master"}
    }
};

//instance method for edit
documentMasterSchema.methods.edit = async function ({ userId, updatedData}){
    try {
        const updatedDocumentMaster = await this.constructor.findOneAndUpdate(
            {_id: this._id},
            {...updatedData, editedBy: userId},
            {new: true}
        )

        if(!updatedDocumentMaster){
            return {status: false, message: "Document Master not found"}
        }

        return {status:true, message: "Documnet Master edited successfully", data: updatedDocumentMaster }
    } catch (error) {
        return {status: false, message: "Falied to edit Documnet Master" }
    }
}

//instance method for insert
documentMasterSchema.methods.insert = async function({newDocumentMaster, userId}){
    try {
        //check for duplicacy
        const documentMasterExists = await this.constructor.findOne({name: newDocumentMaster.name})
        if (documentMasterExists) {
            return { status: false, message: "Document master with this name already exists" }
        }

        const documentMasterData = new this.constructor({
            name: newDocumentMaster.name,
            property: newDocumentMaster.property,
            mandatory: newDocumentMaster.mandatory,
            companyId: newDocumentMaster.companyId,
            createdBy: userId,
            oldId
        })

        const result = await documentMasterData.save()
        return {status: true, message: "Document Master created successfully", data: result}
    } catch (error) {
        return {status: false, message: "Failed to create Document Master"}
    }

}

//instance method for toggle
documentMasterSchema.methods.toggle = async function({userId}){
    try {
        //toggle the status
        this.isActive = !this.isActive
        this.editedBy = userId
        await this.save()
        return { status: true, message: "Document Master status toggled", data: this }
    } catch (error) {
        return { status: false, message: "Failed to toggle Document Master status" }
    }
}


const documentMasterModel = mongoose.model("documentMaster", documentMasterSchema);
module.exports = { documentMasterModel,documentMasterSchema };

