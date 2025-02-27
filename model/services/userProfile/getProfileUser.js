const getProfileUser = async () =>{
    try {
        return {status: true, message: "User profile fetched", data:{
            "firstName": "John",
            "lastName": "Doe",
            "profileImage": "https://example.com/images/john_doe.jpg",
            "email": "john.doe@example.com",
            "phone": "+1234567890",
            "age": 30,
            "city": "Springfield",
            "state": "Illinois",
            "country": "USA",
            "ZipCode": "62701",
            "address": "1234 Elm Street, Springfield, IL",
            "isVerified": true,
            "isActive": true
        }}
    } catch (error) {
        console.log("Error in fetching user profile");
        return {status: false, message: "Failed to fetch user profile", error: error.message}
    }
}
module.exports = getProfileUser