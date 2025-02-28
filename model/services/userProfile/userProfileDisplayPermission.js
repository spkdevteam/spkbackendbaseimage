const userProfileDisplayPermission = async () =>{
    try {
        return {status: true, message: "Display User Profile Permission", data:{
            "name": "John Doe",
            "email": "john.doe@example.com",
            "profileImage": "https://example.com/images/john_doe.jpg",
            "role": {
            "roleId": "67b5c5f8b16bd2ccf5927d31",
            "role": "Manager",
            "permissions": [
                "create",
                "edit",
                "delete"
            ]
        }
        }}
    } catch (error) {
        console.log("Error in downloading document", error);
        return {status: false, message: "Failed to download document", error: error.message}
    }
}
module.exports = userProfileDisplayPermission