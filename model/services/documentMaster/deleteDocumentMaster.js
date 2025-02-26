const deleteDocumentMaster = async () =>{
    try {
        return {status: true, message: "Document Master deleted successfully"}
    } catch (error) {
        console.log("Error in deleting document master", error);
        return {status: false, message: "Fail to delete Document Master", error: error.message}
        
    }
}
module.exports = deleteDocumentMaster