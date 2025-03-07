const toggleMenuStatusFn = require("../../model/services/menuMaster/toggleMenuStatusFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const toggleMenuStatus = async (req, res, next) => {
    try {
        const { menuId, userId, clientId } = await sanitizeBody(req.body);
        const result = await toggleMenuStatusFn({ menuId, userId, clientId });
        return res.status(200).json({ status:result?.status, message: result?.message });
    } catch (error) { 
        next(error);
    }
}

module.exports = toggleMenuStatus;