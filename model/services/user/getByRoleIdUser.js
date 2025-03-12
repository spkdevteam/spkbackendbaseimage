const getByRoleIdUser = async () =>{
    try {
        return {status: true, message: "All user fetched by roleId", data:[
            {
                "_id": "65a2b7c9e8b1a3d0a1234601",
                "firstName": "Emma",
                "lastName": "Johnson",
                "email": "emma.johnson@example.com",
                "phone": "1112223333",
                "roleId": "67b479b8bbd1da4b4d52ca19"
            },
            {
                "_id": "65a2b7c9e8b1a3d0a1234602",
                "firstName": "Liam",
                "lastName": "Miller",
                "email": "liam.miller@example.com",
                "phone": "2223334444",
                "roleId": "67b479b8bbd1da4b4d52ca19"
            },
            {
                "_id": "65a2b7c9e8b1a3d0a1234603",
                "firstName": "Sophia",
                "lastName": "Anderson",
                "email": "sophia.anderson@example.com",
                "phone": "3334445555",
                "roleId": "67b479b8bbd1da4b4d52ca19"
            },
            {
                "_id": "65a2b7c9e8b1a3d0a1234604",
                "firstName": "Noah",
                "lastName": "Williams",
                "email": "noah.williams@example.com",
                "phone": "4445556666",
                "roleId": "67b479b8bbd1da4b4d52ca19"
            },
            {
                "_id": "65a2b7c9e8b1a3d0a1234605",
                "firstName": "Olivia",
                "lastName": "Brown",
                "email": "olivia.brown@example.com",
                "phone": "5556667777",
                "roleId": "67b479b8bbd1da4b4d52ca19"
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
        console.log("Error in fetching users with roleId", error);
        return {status: false, message: "Failed to fetch users by roleId", error: error.message}
    }
}
module.exports = getByRoleIdUser