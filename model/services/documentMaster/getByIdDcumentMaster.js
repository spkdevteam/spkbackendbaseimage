const getByIdDocumentMaster = async () =>{
    try {
        return {status: false, message: "Document master fetch by documentMasterId", data:{
            "documentId": "67b9859a31301b22209ecb68",
            "Name": "Passport Documents",
            "Property": [
              {
                "PropertyName": "Passport Image",
                "Type": "String"
              },
              {
                "PropertyName": "Issue Date",
                "Type": "Date"
              }
            ],
            "Required": true,
            "createdAt": "2025-02-26T08:30:00Z",
            "updatedAt": "2025-02-26T08:30:00Z"
          }}
    } catch (error) {
        console.log("Error in fetching Document Master by id", error);
        return {status: false, message: "Failed to fetch Document master by id", error: error.message}
        
    }
}
module.exports = getByIdDocumentMaster