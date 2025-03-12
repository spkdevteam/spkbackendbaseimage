const editPagesMasterFn = require("../../model/services/pagesMaster/editPagesMasterFn")
const sanitizeBody = require("../../utils/sanitizeBody")

const editPage = async (req, res, next) => {
    try{
        const {menuName, pathName, reporting, userId, pageId, clientId, companyId} = await sanitizeBody(req?.body); //userId is pushed by middleWare, later will be handled from token
        const result = await editPagesMasterFn({menuName, pathName, reporting, editedByUserId:userId, pageId, clientId, companyId});
        return res.status(200).json({status:result?.status, message: result?.message
            // , data: result?.data
        });
    }
    catch(error){
        next(error);
    }
}

module.exports = editPage;
