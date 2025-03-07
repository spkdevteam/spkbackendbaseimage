const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { menuMasterSchema } = require("../../menuMasterSchema");
const { clientIdValidation } = require("../validation/validation");

const toggleMenuStatusFn = async ({ menuId, userId, clientId }) => {
    try {
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id, try again" };
            case !mongoose.Types.ObjectId.isValid(menuId):
                return { status: false, message: "Invalid menu id, try again" };
        };

        const clientIdValidationVar = clientIdValidation({ clientId });
        if (!clientIdValidationVar.status) return { status: false, message: "Networking problem, try again" };

        const db = await getClientDatabaseConnection(clientId);
        const menuMaster = await db.model("menu", menuMasterSchema);

        const menu = await menuMaster.findOne({ _id: menuId, deletedAt: null });

        if (!menu) return { status: false, message: "No such menu" };

        const toggledApiResponse = await menuMaster.toggleMenuMaster({ menuId, userId });

        if (!toggledApiResponse.status) return { status: false, message: "Failed to toggle the menu status" };

        return { status: true, message: "Successfully toggled the menu status" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = toggleMenuStatusFn;