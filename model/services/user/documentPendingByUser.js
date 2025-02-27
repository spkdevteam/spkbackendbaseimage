const documentPendingByUser = async () =>{
    try {
        return {status: true, message: "Users fetched by pending document based on their role", data:[
            {
                "_id": "65a3b9c9e8b1a3d0a1234701",
                "firstName": "John",
                "lastName": "Doe",
                "email": "john.doe@example.com",
                "phone": "1234567890",
                "role": "Manager",
                "pendingDocuments": [
                  {
                    "documentNumber": "DOC1001",
                    "documentType": "ID Proof",
                    "submissionStatus": "pending"
                  },
                  {
                    "documentNumber": "DOC1002",
                    "documentType": "Address Proof",
                    "submissionStatus": "pending"
                  }
                ]
              },
              {
                "_id": "65a3b9c9e8b1a3d0a1234702",
                "firstName": "Jane",
                "lastName": "Smith",
                "email": "jane.smith@example.com",
                "phone": "9876543210",
                "role": "Manager",
                "pendingDocuments": [
                  {
                    "documentNumber": "DOC1003",
                    "documentType": "Bank Statement",
                    "submissionStatus": "pending"
                  }
                ]
              },
              {
                "_id": "65a3b9c9e8b1a3d0a1234703",
                "firstName": "Alice",
                "lastName": "Brown",
                "email": "alice.brown@example.com",
                "phone": "5555555555",
                "role": "Manager",
                "pendingDocuments": [
                  {
                    "documentNumber": "DOC1004",
                    "documentType": "Work Permit",
                    "submissionStatus": "pending"
                  },
                  {
                    "documentNumber": "DOC1005",
                    "documentType": "Health Certificate",
                    "submissionStatus": "pending"
                  }
                ]
              },
              {
                "_id": "65a3b9c9e8b1a3d0a1234704",
                "firstName": "Bob",
                "lastName": "Wilson",
                "email": "bob.wilson@example.com",
                "phone": "4444444444",
                "role": "Manager",
                "pendingDocuments": [
                  {
                    "documentNumber": "DOC1006",
                    "documentType": "Tax Form",
                    "submissionStatus": "pending"
                  }
                ]
              },
              {
                "_id": "65a3b9c9e8b1a3d0a1234705",
                "firstName": "Charlie",
                "lastName": "Davis",
                "email": "charlie.davis@example.com",
                "phone": "6666666666",
                "role": "Employee",
                "pendingDocuments": [
                  {
                    "documentNumber": "DOC1007",
                    "documentType": "Insurance Policy",
                    "submissionStatus": "pending"
                  },
                  {
                    "documentNumber": "DOC1008",
                    "documentType": "Background Check",
                    "submissionStatus": "pending"
                  }
                ]
              }
            ],
            "metaData": {
              "page": 1,
              "perPage": 5,
              "searchKey": "",
              "totalData": 5,
              "totalPages": 1
            }
        }
    } catch (error) {
        
    }
}
module.exports = documentPendingByUser