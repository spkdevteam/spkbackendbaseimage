
const createPagesMasterFn = require("../../model/services/pagesMaster/createPagesMasterFn")
const sanitizeBody = require("../../utils/sanitizeBody")

const createPage = async (req, res, next) => {
    try{
        const {menuName, pathName, reporting, userId, oldId, clientId} = await sanitizeBody(req.body);
        const result = await createPagesMasterFn({menuName, pathName, reporting, createdByUserId:userId, oldId, clientId});
        return res.status(201).json({status:result?.status, message: result?.message
            // , data: result?.data
        });
    }
    catch(error){
        next(error);
    }
}

module.exports = createPage;