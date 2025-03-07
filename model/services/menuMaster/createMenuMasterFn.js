const { default: mongoose } = require("mongoose");
const { menuMasterSchema } = require("../../menuMasterSchema");
const { clientIdValidation, emptyStringValidation } = require("../validation/validation");
const { getClientDatabaseConnection } = require("../../connection");

const createMenuMasterFn = async ({ _id = null, userId, menuIdForSaving, companyId, name, clientId }) => {
    try {
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id, try again" };
            case !mongoose.Types.ObjectId.isValid(menuIdForSaving):
                return { status: false, message: "Invalid menu id, try again" };
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company id, try again" };
        };

        if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
            return { status: false, message: "Wrong _id, while copying from db" };
        };

        const validation = [
            clientIdValidation({ clientId }),
            emptyStringValidation({ string: name, name: "menu name: " })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map((e) => e.message).join(", ") };


        const db = await getClientDatabaseConnection(clientId);
        const menuMaster = await db.model("menu", menuMasterSchema);

        const menuWithSimilarName = await menuMaster.findOne({ name, deletedAt: null });
        if (menuWithSimilarName) return { status: false, message: "This api name already exists" };

        const menu = await menuMaster.insertMenuMaster({ _id, name, menuIdForSaving, companyId, userId });

        if (!menu.status) return { status: false, message: api.message };

        return { status: true, message: "Menu added successfully", data: menu.data };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createMenuMasterFn;