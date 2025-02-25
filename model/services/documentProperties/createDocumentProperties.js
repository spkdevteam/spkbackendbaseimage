
const createDocumentPorperties = async ({ PropertyName,Type,clientId}) => {
    try {
        return {status: true, message: "Document Property created successfully", data:{
            _id:"67b037ae038ce3ffbb097924"

        }}
    } catch (error) {
        return {status: false, message: "Fail to create Document Property", error: error.message}
    }
}
module.exports= createDocumentPorperties