const createEmployee = async () =>{
    try {
        return {status: true, message: "Employee created successfully", data: {
            _id: "67b976e6b1d6de1e642f009b"
        }}
    } catch (error) {
        console.log("Error creating employee", error);
        return {status: false, message: "Failed to create employee", error: error.message}
        
    }
}
module.exports = createEmployee