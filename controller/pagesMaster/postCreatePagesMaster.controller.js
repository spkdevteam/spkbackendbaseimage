
const createPagesMasterFn = require("../../model/services/pagesMaster/createPagesMasterFn")
const sanitizeBody = require("../../utils/sanitizeBody")

const createPage = async (req, res, next) => {
    try{
        const {_id= null, menuName, pathName, reporting, userId, clientId, companyId} = await sanitizeBody(req.body);
        const result = await createPagesMasterFn({_id, menuName, pathName, reporting, createdByUserId:userId, clientId, companyId});
        console.log("result?.dataresult?.data=>>>",result?.data);
        
        return res.status(201).json({status:result?.status, message: result?.message, data: result?.data
        });
    }
    catch(error){
        next(error);
    }
}

module.exports = createPage;