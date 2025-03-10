const { default: mongoose } = require("mongoose");
const { clientIdValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const { menuMasterSchema } = require("../../menuMasterSchema");

const getMenuMasterFn = async ({ menuId, clientId }) => {
    try {
        const clientIdvalidationVar = clientIdValidation({ clientId });
        if(!clientIdvalidationVar.status) return {status: false, message: "Some networking problem"};


        if(!mongoose.Types.ObjectId.isValid(menuId)){
            return {status: false, message: "Operation failed, try again"};
        }

        const db = await getClientDatabaseConnection(clientId);
        const menuMaster = await db.model("menu", menuMasterSchema);


        const getMenu = await menuMaster.findOne({ _id: menuId, deletedAt: null });

        if(!getMenu) return { status: false, message: "Try again"};


        return {status: true, message: "Menu fetched successfully", data: getMenu};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = getMenuMasterFn;