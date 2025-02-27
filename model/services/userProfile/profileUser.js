const profileUser = async () =>{
    try {
        return {status: true, message: "User profile updated successfully"}
    } catch (error) {
        console.log("Error in updating user profile", error);
        return {status: false, message: "Faild to update user profile"}
    }
}
module.exports = profileUser