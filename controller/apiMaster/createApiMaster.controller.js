const createApiMasterFn = require("../../model/services/apiMaster/createApiMasterFn");
const sanitizeBody = require("../../utils/sanitizeBody");

const createApiMaster = async (req, res, next) => {
    try {
        const { _id = null, userId, apiName, apiPath, menuId, companyId, clientId } = await sanitizeBody(req.body);
        const result = await createApiMasterFn({ _id, userId, apiName, apiPath, menuId, companyId, clientId });
        return res.status(200).json({ status: result?.status, message: result?.message, data: result?.data });
    } catch (error) {
        next(error);
    }
}

module.exports = createApiMaster;