const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { menuMasterSchema } = require("../../menuMasterSchema");
const { emptyStringValidation, clientIdValidation } = require("../validation/validation");


const editMenuMasterFn = async ({ menuId, userId, menuIdForSaving, name, clientId })=> {
    try {
        //checking the mongodb ids
        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return {status: false, message: "Invalid user id"};
            case !mongoose.Types.ObjectId.isValid(menuIdForSaving):
                return {status: false, message: "Invalid menu to change id"};
            case !mongoose.Types.ObjectId.isValid(menuId):
                return {status: false, message: "Invalid menu id"};
        };

        //validating the other inputs
        const validation = [
            emptyStringValidation({ string: name, name: "menu name: "}),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e)=> e && e.status === false);
        if(error.length > 0) return { status: false, message: error.map((e)=> e.message).join(", ")};

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const menuMaster = await db.model("menu", menuMasterSchema);

        //checking wheather the menu name asked to change, is available or not
        const theNameAlreadytExists = await menuMaster.findOne({ name, deletedAt: null , _id: {$ne: menuId }});
        if(theNameAlreadytExists) return { status: false, message: "The menu name is already in use"};


        //finding one
        const menu = await menuMaster.findOne({ _id: menuId, deletedAt: null });

        //returning if not found
        if(!menu) return {status:false, message: "Network problem, try again"};

        //checking wheather it needs to edit or not
        if(menu.name === name && menu.menuId == menuIdForSaving) return { status: false, message: "There is nothing to update"};

        //editing the api
        const editedMenu = await menuMaster.updateMenuMaster({ menuId, userId, menuIdForSaving, name });

        //checking wheather operation failed or not
        if(!editedMenu.status) return { status: false, message: "Operation failed, try again"};

        return {status: true, message: "Menu is updated"};
    } catch (error) {
        return {status: false, message: error.message};
    }
}

module.exports = editMenuMasterFn;