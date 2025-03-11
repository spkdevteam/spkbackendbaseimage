const mongoose = require("mongoose")
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const menuMasterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    pageId: {
        type: ObjectId,
        ref: "Page",
        default: null,
        index: true
    },
    companyId: {type: ObjectId, ref: "company", index: true},
    isActive: { type: Boolean, default: true },
    createdBy: { type: ObjectId, ref: "user", index: true},
    editedBy: {type: ObjectId, ref: "user", index: true},
    deletedBy: { type: ObjectId, ref: "user", index: true},
    deletedAt: { type: Date, default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", index: true},
    oldId: { type: String, default: null }
},
    {
        timestamps: true
    }
);

//create instance for softDelete
menuMasterSchema.statics.softDeleteMenuMaster = async function ({ menuId, userId }) {
    try {
        //if already deleted return fale
        const Menu = await this.findOne({ _id: menuId });

        Menu.deletedAt = new Date();
        Menu.deletedBy = userId;

        const savedMenu = await Menu.save();
        return { status: true, message: "Menu deleted successfully", data: savedMenu };
    } catch (error) {
        return { status: false, message: "Failed to delete menu" };
    }
};

//create instance for edit
menuMasterSchema.statics.updateMenuMaster = async function ({ menuId, userId, pageId, name }) {
    try {
        const Menu = await this.findOne({ _id: menuId });

        Menu.name = name;
        Menu.editedBy = userId;
        Menu.pageId = pageId;

        const savedMenu = await Menu.save();

        return { status: true, message: "Menu edited successfully", data: savedMenu };
    } catch (error) {
        return { status: false, message: "Failed to edit menu", error: error.message };
    }
};

//create an instance for insert
menuMasterSchema.statics.insertMenuMaster = async function ({ _id = null, name, pageId, companyId, userId }) {
    try {
        // Create new menu instance
        const newMenuData = new this({
            name,
            pageId,
            companyId,
            createdBy: userId,
        });

        if(_id){
            newMenuData.oldId = _id;
        };

        const result = await newMenuData.save();
        return { status: true, message: "Menu created successfully", data: result }
    } catch (error) {
        return { status: false, message: "Failed to create menu", error: error.message }
    }
};

//create instance for toggle 
menuMasterSchema.statics.toggleMenuMaster = async function ({ menuId, userId }) {
    try {
        //toggle the status
        const Menu = await this.findOne({ _id: menuId });

        Menu.editedBy = userId;
        Menu.isActive = !Menu.isActive;


        const savedMenu = await Menu.save();
        return { status: true, message: "Menu status toggled", data: savedMenu };
    } catch (error) {
        return { status: false, message: "Failed to toggle Menu status" };
    }
}

const menuMasterModel = mongoose.model("Menu", menuMasterSchema);
module.exports = { menuMasterModel, menuMasterSchema };