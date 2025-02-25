const updateDocumentProperties = async({id, clientId, PropertyName, Type}) => {
    try {
        return {status: true, message: "Document Porperties updated successfully"}
    } catch (error) {
        return {status: false, message: "Fail to update Document Porperties"}
    }
}
module.exports=updateDocumentProperties