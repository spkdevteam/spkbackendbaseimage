const createDocumentPorperties = require("../../model/services/documentProperties/createDocumentProperties")
const sanitizeBody = require("../../utils/sanitizeBody")

const TypeEnum = {
    STRING: "String",
    NUMBER: "Number",
    BOOLEAN: "Boolean",
    DATE: "Date"
}

const documentPropertiesCreate = async (req, res, next) =>{
    try {
        const data = await sanitizeBody(req.body)
        const {PropertyName, Type, clientId} = data
        //Validate PropertyName
        const allowedPropertyName = ["Authority", "Validity", "Image", "Validation"]
        if(!allowedPropertyName.includes(PropertyName)){
            return res.status(400).json({ status: false, message: "Invalid PropertyName" })
        }
        //Validate Type
        if(!Object.values(TypeEnum).includes(Type)){
            return res.status(400).json({ status: false, message: "Invalid Type" })
        }
        const result = await createDocumentPorperties({PropertyName, Type, clientId})
        return res.status(201).json({status: result?.status, message: result?.message, data: result?.data})
    } catch (error) {
        next(error)
    }
}
module.exports = documentPropertiesCreate