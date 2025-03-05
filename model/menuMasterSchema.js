const mongoose = require("mongoose")
const { Schema } = mongoose
const ObjectId = Schema.ObjectId

const menuMasterSchema = mongoose.Schema({
        
            name: {
                type: String,
                required: true,
                unique: true,
            },
            menuId: {
                type: ObjectId,
                ref: "Page",
                default: null,
                index: true
            },
        
    isActive: { type: Boolean, default: true },
    createdBy: { type: ObjectId, ref: "user", index: true, default: null },
    deletedBy: { type: ObjectId, ref: "user", index: true, default: null },
    deletedAt: { type: Date, default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", index: true, default: null },
    oldId: { type: String, default: null }

},
    {
        timestamps: true
    }
);

//create instance for softDelete
menuMasterSchema.methods.softDelete = async function ({userId}) {
    try {
        //if already deleted return fale
        if(this.deletedAt !== null){
            return { status: true, message: "This menu is akready deleted" }
        }

        this.deletedAt = new Date()

        //update deletedBy field
        this.deletedBy = userId
        await this.save()
        return { status: true, message: "Menu deleted successfully", data: this }
    } catch (error) {
        return { status: false, message: "Failed to delete menu" }
    }
};

//create instance for edit
menuMasterSchema.methods.edit = async function ({userId, updatedData}) {
    try {
        const updatedMenu = await this.constructor.findOneAndUpdate(
            { _id: this._id }, 
            { ...updatedData, editedBy: userId },
            { new: true } 
        );

        if (!updatedMenu) {
            return { status: false, message: "Menu not found" };
        }

        return { status: true, message: "Menu edited successfully", data: updatedMenu };
    } catch (error) {
        return { status: false, message: "Failed to edit menu", error: error.message };
    }
};
       

//create an instance for insert
menuMasterSchema.methods.insert = async function ({ newMenu, userId }) {
    try {
        // Check for duplicate menu
        const existingMenu = await this.constructor.findOne({ name: newMenu.name },);

        if (existingMenu) {
            return { status: false, message: "Menu with name already exists" }
        }

        // Create new menu instance
        const newMenueData = new this.constructor({
            name: newMenu.name,
            menuId: newMenu.menuId,
            createdBy: userId,
            oldId
        });

        const result = await newMenueData.save();
        return { status: true, message: "Menu created successfully", data: result }
    } catch (error) {
        return { status: false, message: "Failed to create menu", error: error.message }
    }
};

//create instance for toggle 
menuMasterSchema.methods.toggle = async function ({userId}){
    try {
        //toggle the status
        this.isActive = !this.isActive
        this.editedBy = userId
        await this.save()
        return { status: true, message: "Menu status toggled", data: this }
    } catch (error) {
        return { status: false, message: "Failed to toggle Menu status" }
    }
}

const menuMasterModel = mongoose.model("Menu", menuMasterSchema);
module.exports = { menuMasterModel,menuMasterSchema };