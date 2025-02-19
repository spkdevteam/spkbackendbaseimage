const editAPI = require("../../model/services/apiMaster/editApiMaster")

const editAPIMaster = async (req, res) =>{
    try {
        const result =await editAPI({req})
        return res.status(200).json({status: result.status, message: result.message})
    } catch (error) {
        next(error)
    }
}

module.exports = editAPIMaster