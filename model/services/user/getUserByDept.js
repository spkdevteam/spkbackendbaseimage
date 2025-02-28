const getUserByDept = async () =>{
    try {
        return {status: true, message: "All users fetched by department", data:[
            {
                "_id": "65a1f9c9e8b1a3d0a1234567",
                "firstName": "John",
                "lastName": "Doe",
                "email": "john.doe@example.com",
                "phone": "1234567890",
                "departmentId": "dep001",
                "metaData": {
                  "createdAt": "2024-02-27T10:00:00Z",
                  "updatedAt": "2024-02-27T12:00:00Z",
                  "role": "Admin",
                  "isActive": true
                }
              },
              {
                "_id": "65a1f9c9e8b1a3d0a1234568",
                "firstName": "Jane",
                "lastName": "Smith",
                "email": "jane.smith@example.com",
                "phone": "9876543210",
                "departmentId": "dep001",
                "metaData": {
                  "createdAt": "2024-02-26T15:30:00Z",
                  "updatedAt": "2024-02-27T09:45:00Z",
                  "role": "User",
                  "isActive": true
                }
              }
        ]}
    } catch (error) {
        console.log("Error in fetching users", error);
        return {status: false, message: "Failed to fetch users by department", error: error.message}
    }
}
module.exports = getUserByDept