const getMenuMasterFn = require("../../model/services/menuMaster/getMenuMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const getMenuMaster = async (req, res, next) => {
    try {
        const { menuId, clientId } = await sanitizeBody(req.params);
        const result = await getMenuMasterFn({ menuId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = getMenuMaster;