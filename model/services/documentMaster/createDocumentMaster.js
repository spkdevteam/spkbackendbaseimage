const createDocumentmaster = async () =>{
    try {
        return {status: true, message: "Document Master is created successfully", data: {
            _id: "67b9859a31301b22209ecb68"
        }}
    } catch (error) {
        console.log("Error creating document master", error);
        return {status: false, message: "Fail to create document master", error: error.message}
        
    }
}
module.exports = createDocumentmaster