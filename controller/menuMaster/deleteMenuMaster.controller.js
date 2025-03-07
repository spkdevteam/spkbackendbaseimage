const deleteMenuMasterFn = require("../../model/services/menuMaster/deleteMenuMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const deleteMenuMaster = async (req, res, next) => {
    try {
        const { menuId, clientId } = await sanitizeBody(req.params);
        const { userId } = await sanitizeBody(req.body);
        const result = await deleteMenuMasterFn({ userId, menuId, clientId });
        return res.status(200).json({ status:result?.status, message: result?.message});
    } catch (error) {
        next(error);
    }
}

module.exports = deleteMenuMaster;