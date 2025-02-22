const getCompanyAll = require("../../model/services/company/getAllCompany")
const getCompanyId = require("../../model/services/company/getCompanyById")
const sanitizeBody = require("../../utils/sanitizeBody")


const getAllCompany = async (req, res, next) =>{
    try {
        // const fetchAllCompany =await sanitizeBody(req.params)
        // console.log(fetchAllCompany, "=============");
        const {clientId} = await sanitizeBody(req.params)
        const query = await sanitizeBody(req.query)
        const cleanQuery = {
            page: query.page ? query.page.replace(/^"|"$/g, "") : "1", // default to "1" if missing
            perPage: query.perPage ? query.perPage.replace(/^"|"$/g, "") : "10", // default to "10"
            searchKey: query.searchKey ? query.searchKey.replace(/^"|"$/g, "") : "", // default to empty string
        };
        // convert page and perPage to numbers
        cleanQuery.page = parseInt(cleanQuery.page, 10);
        cleanQuery.perPage = parseInt(cleanQuery.perPage, 10);
         const { page, perPage, searchKey} = cleanQuery
        
        const result = await getCompanyAll({ page, perPage, searchKey, clientId})
        return res.status(200).json({status: result.status, message: result.message, data: result.data, metaData: result.metaData})
    } catch (error) {
        next(error)
    }
}

const getCompanyById = async (req, res, next) =>{
    try {
        const company = await sanitizeBody(req.params)
        const result = await getCompanyId(company)
        return res.status(200).json({status: result.status, message: result.message, data: result.data})
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllCompany, getCompanyById}