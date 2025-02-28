const userProfileDocumentUpdate = async () =>{
    try {
        return {status: true, message: "Document updated successfully from user profile", data:{
                "userId": "65a3b9c9e8b1a3d0a1234701",
                "firstName": "John",
                "lastName": "Doe",
                "email": "john.doe@example.com",
                "phone": "1234567890",
                "roleId": "67b5cfd46973cf6d93c75503",
                "pendingDocuments": [
                  {
                    "documentNumber": "DOC1001",
                    "documentType": "ID Proof"
                  },
                  {
                    "documentNumber": "DOC1002",
                    "documentType": "Address Proof"
                  }
                ],
                "clientId": "6788abe40db7c3b61ed93c70"
              }
        }
    } catch (error) {
        console.log("Error in updating document from user profile", error);
        return {status: false, message: "Failed to update document from user profile", error: error.message}
    }
}
module.exports = userProfileDocumentUpdate