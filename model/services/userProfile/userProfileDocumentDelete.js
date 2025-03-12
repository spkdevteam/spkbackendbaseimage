const userProfileDocumentDelete = async () =>{
    try {
        return {status: true, message: "Document from user profile deleted successfully"}
    } catch (error) {
        console.log("Error in deleting documents from user profile", error);
        return{status: false, message: "Failed to delete documents from user profile", error: error.message}
    }
}
module.exports = userProfileDocumentDelete