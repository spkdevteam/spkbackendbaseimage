const getByDesignationUser = async () =>{
    try {
        return {status: true, message: "Users fetched by their designationId", data: [
            {
                "_id": "65a1f9c9e8b1a3d0a1234503",
                "firstName": "Alice",
                "lastName": "Brown",
                "email": "alice.brown@example.com",
                "phone": "5555555555",
                "designationId": "67bfe36f432869b6ca271bf7"
            },
            {
                "_id": "65a1f9c9e8b1a3d0a1234504",
                "firstName": "Bob",
                "lastName": "Wilson",
                "email": "bob.wilson@example.com",
                "phone": "4444444444",
                "designationId": "67bfe36f432869b6ca271bf7"
            }
        ],
        "metaData": {
            "page": 1,
            "perPage": 5,
            "searchKey": "",
            "totalData": 12,
            "totalPages": 3
        }
        }
    } catch (error) {
        console.log("Error fetching users by designationId", error);
        return {status: false, message: "Failed to fetch users by designation", error: error.message}
    }
}
module.exports = getByDesignationUser