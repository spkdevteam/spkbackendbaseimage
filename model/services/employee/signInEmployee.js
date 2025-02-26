const signInEmployee = async () =>{
    try {
        return {status: true, message: "Employee signed in successfully", data:{
            "_id": "67b976e6b1d6de1e642f009b",
            "employeeId": "john.doe@example.com"
        }}
    } catch (error) {
        console.log("Error in signin employee", error);
        return {status: false, message: "Failed to signin employee", error: error.message}
    }
}
module.exports = signInEmployee