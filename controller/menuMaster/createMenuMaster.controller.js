const createMenuMasterFn = require("../../model/services/menuMaster/createMenuMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createMenuMaster = async (req, res, next) => {
    try {
        const { _id = null, name, menuId, userId, companyId, clientId } = await sanitizeBody(req.body);
        const result = await createMenuMasterFn({  _id , name, menuIdForSaving: menuId , userId, companyId, clientId })
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data});
    } catch (error) {
        next(error);
    }
}

module.exports = createMenuMaster;