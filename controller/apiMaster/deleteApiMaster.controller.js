// const deleteAPI = require("../../model/services/apiMaster/deleteApiMaster")
// const sanitizeBody = require("../../utils/sanitizeBody")

// const deleteApiMaster = async (req, res, next) =>{
//     try {
//         const data = await sanitizeBody(req.body)
//         const result = await deleteAPI(data)

//         return res.status(200).json({status: result.status, message: result.message})
//     } catch (error) {
//         next(error)
//     }
// }

// module.exports = deleteApiMaster