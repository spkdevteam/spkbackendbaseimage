const editMenuMasterFn = require("../../model/services/menuMaster/editMenuMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const editMenuMaster = async (req, res, next) => {
    try {
        const { menuId, userId, pageId, name, clientId } = await sanitizeBody(req.body);
        const result = await editMenuMasterFn({ menuId, userId, pageId, name, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = editMenuMaster;