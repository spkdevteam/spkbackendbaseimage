const updateUserByDesignation = async () =>{
    try {
        return {status: true, message: "User updatted successfully by designation", data:{
            "userId": "67b6fd3b47723f1361136f16",
            "firstName": "Martin",
            "lastName": "Simon",
            "companyId": "67b037ae038ce3ffbb097924",
            "profileImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            "email": "martin@gmail.com",
            "phone": "+1234567856",
            "password": "Hellooo_12332",
            "gender": "Male",
            "age": 30,
            "bloodGroup": "O+",
            "city": "New York",
            "state": "New York",
            "country": "USA",
            "ZipCode": "10001",
            "address": "123 Main Street, New York, NY 10001",
            "isActive": true,
            "createdBy": "652c2b6f7a1c4d8e9f0b3a2c",
            "deletedAt": null,
            "designationId": "67bfe36f432869b6ca271bf7",
            "clientId": "6788abe40db7c3b61ed93c70"
        }}
    } catch (error) {
        console.log("Error in updating user by designation", error);
        return {status: false, message: "Failed to update user by designation", error: error.message}
    }
}
module.exports = updateUserByDesignation