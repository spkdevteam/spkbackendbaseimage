const { default: mongoose } = require("mongoose");
const { clientIdValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");
const { menuMasterSchema } = require("../../menuMasterSchema");

const deleteMenuMasterFn = async ({ userId, menuId, clientId }) => {
    try {
        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return {status: false, message: "Invalid user id, try again"};
            case !mongoose.Types.ObjectId.isValid(menuId):
                return {status: false, message: "Invalid menu id, try again"};
        }
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if(error.length > 0) return {status: false, message: error.map((e)=> e.message).join(", ")};

        const db = await getClientDatabaseConnection(clientId);
        const menuMaster = await db.model("menu", menuMasterSchema);

        const doesNotExists = await menuMaster.findOne({ _id: menuId, deletedAt: null });
        if(!doesNotExists) return { status: false, message: "Networking problem,  try again."};

        const deletedMenu = await menuMaster.softDeleteMenuMaster({ menuId, userId });

        if(!deletedMenu.status) return {status:false, message: "Failed to delete the menu"};

        return {status: true, message: "Menu deleted successfully"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = deleteMenuMasterFn;