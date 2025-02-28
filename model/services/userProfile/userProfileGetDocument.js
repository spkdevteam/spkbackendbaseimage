const userProfileGetDocument = async () =>{
    try {
        return {status: true, message: "Documents fetched in user profile", data:{
                "userId": "65a3b9c9e8b1a3d0a1234701",
                "firstName": "John",
                "lastName": "Doe",
                "email": "john.doe@example.com",
                "phone": "1234567890",
                "role": "Manager",
                "Documents": [
                  {
                    "documentNumber": "DOC1001",
                    "documentType": "ID Proof",
                  },
                  {
                    "documentNumber": "DOC1002",
                    "documentType": "Address Proof",
                  }
                ]
              }
        }
    } catch (error) {
        console.log("Error in fetching documents from user profile", error);
        return {status: false, message: "Faild to fetch documents from user profile", error: error.message}
    }
}
module.exports = userProfileGetDocument