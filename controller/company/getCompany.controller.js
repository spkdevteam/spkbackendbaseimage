const getCompanyAll = require("../../model/services/company/getAllCompany")
const getCompanyId = require("../../model/services/company/getCompanyById")

require("dotenv").config()

const getAllCompany = async (req, res, next) =>{
    try {
        const result = await getCompanyAll({clientId: process.env.CLIENTID_FOR_USER})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

const getCompanyById = async (req, res, next) =>{
    try {
        const result = await getCompanyId({clientId: process.env.CLIENTID_FOR_USER, req})
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllCompany, getCompanyById}