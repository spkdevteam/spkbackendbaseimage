const removeDocumentProprties = async({clientId, id}) =>{
    try {
        return{status:true, message: "Documnet Properties deleted successfully"}
    } catch (error) {
        return {status: false, message: "Fail to delete Document Properties", error: error.message}
    }
}
module.exports= removeDocumentProprties