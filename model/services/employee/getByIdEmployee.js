const getByIdEmployee = async () =>{
    try {
        return {status: true, message: "Fetched data of employee by id", data:{

                "firstName": "Johnnn",
                "lastName": "Doe",
                "companyId": "12345abcde",
                "designationId": "67890fghij",
                "joiningDate": "2022-01-15",
                "roleId": "admin123",
                "documentId": "67b9859a31301b22209ecb68",
                "email": "john.doe@example.com",
                "phone": "+1234567890",
                "gender": "Male",
                "age": 30,
                "bloodGroup": "O+",
                "city": "New York",
                "state": "New York",
                "country": "USA",
                "ZipCode": "10001",
                "address": "1234 Elm Street, Apt 101",
                "isVerified": true,
                "isActive": true,
                "createdAt": "2021-11-03T10:15:30Z",
                "updatedAt": "2023-01-10T14:45:20Z"
        }}
    } catch (error) {
        
    }
}
module.exports = getByIdEmployee