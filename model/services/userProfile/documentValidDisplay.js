const documentValidDisplay = async () =>{
    try {
        return {status: true, message: "Dispaly valid documents from uer profile", data:{
            "userId": "65a3b9c9e8b1a3d0a1234704",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "phone": "1234567890",
            "role": "Manager",
            "Documents": [
            {
                "documentNumber": "DOC1001",
                "documentType": "ID Proof"
            },
            {
                "documentNumber": "DOC1002",
                "documentType": "Address Proof"
            }
            ],
            isValid: true
        }
    }
    } catch (error) {
        console.log("Error in displaying valid documents", error)
        return {status: false, message: "Failed to display valid display", error: error.message}
    }
}

module.exports = documentValidDisplay