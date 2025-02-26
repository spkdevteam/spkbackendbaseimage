const updateEmployee = async () =>{
    try {
        return {status: true, message: "Employee updated successfully"}
    } catch (error) {
        console.log("Error in updating employee", error);
        return {status: false, message: "Failed to update employee", error: error.message}
        
    }
}
module.exports = updateEmployee