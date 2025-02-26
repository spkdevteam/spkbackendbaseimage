const getAllDocumentMaster = async ({page=1, perPage= 10, searchKey= "", clientId}) =>{
    try {
        return {status: true, message: "Fetched all Document Master", data:[
            {
                "id": "67b9859a31301b22209ecb68",
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
                "createdAt": "2025-02-26T08:35:00Z",
                "updatedAt": "2025-02-26T08:35:00Z"
              },
              {
                "id": "67b9859a31301b22209ecb69",
                "Name": "Visa Documents",
                "Property": [
                  {
                    "PropertyName": "Visa Number",
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
              },
              {
                "id": "67b9859a31301b22209ecb70",
                "Name": "Driving License",
                "Property": [
                  {
                    "PropertyName": "License Number",
                    "Type": "String"
                  },
                  {
                    "PropertyName": "Expiration Date",
                    "Type": "Date"
                  }
                ],
                "Required": true,
                "createdAt": "2025-02-26T08:35:00Z",
                "updatedAt": "2025-02-26T08:35:00Z"
              }
            ],
            "metaData": {
              "currentPage": 1,
              "perPage": 10,
              "searchKey": "",
              "totalData": 10,
              "totalPages": 5
            }
        }
    } catch (error) {
        console.log("Error in fetching all data in Document Master");
        return {status: false, message: "Failed to fetch all Document Master data", error: error.message}
        
    }
}
module.exports = getAllDocumentMaster