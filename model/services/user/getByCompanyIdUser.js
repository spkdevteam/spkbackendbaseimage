const getByCompanyIdUser = async ({clientId, companyId, }) =>{
    try {
        return {status: true, message: "User fetched by the companyId", data:[
            // {
            //     "_id": "65a1f9c9e8b1a3d0a1234501",
            //     "firstName": "John",
            //     "lastName": "Doe",
            //     "email": "john.doe@example.com",
            //     "phone": "1234567890",
            //     "companyId": "67b0846d64170f32072bef3b",
            //     "documentNumber": "DOC12345"
            // },
            // {
            //     "_id": "65a1f9c9e8b1a3d0a1234502",
            //     "firstName": "Jane",
            //     "lastName": "Smith",
            //     "email": "jane.smith@example.com",
            //     "phone": "9876543210",
            //     "companyId": "67b0846d64170f32072bef3b",
            //     "documentNumber": "DOC67890"
            // },
            {
                "_id": "65a1f9c9e8b1a3d0a1234503",
                "firstName": "Alice",
                "lastName": "Brown",
                "email": "alice.brown@example.com",
                "phone": "5555555555",
                "companyId": "67b0846d64170f32072bef3b",
                "documentNumber": "DOC11111"
            },
            // {
            //     "_id": "65a1f9c9e8b1a3d0a1234504",
            //     "firstName": "Bob",
            //     "lastName": "Wilson",
            //     "email": "bob.wilson@example.com",
            //     "phone": "4444444444",
            //     "companyId": "67b0846d64170f32072bef3b",
            //     "documentNumber": "DOC22222"
            // },
            // {
            //     "_id": "65a1f9c9e8b1a3d0a1234505",
            //     "firstName": "Charlie",
            //     "lastName": "Davis",
            //     "email": "charlie.davis@example.com",
            //     "phone": "6666666666",
            //     "companyId": "67b0846d64170f32072bef3b",
            //     "documentNumber": "DOC33333"
            // }
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
module.exports = getByCompanyIdUser