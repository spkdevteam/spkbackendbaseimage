const editDocumentMaster = async () =>{
    try {
        return {status: true, message: "Document Master updated successfully"}
    } catch (error) {
        console.log("Error in editiing document master", error);
        return {status: false, message: "Fai; to edit document master", error: error.message}
        
    }
}
module.exports = editDocumentMaster