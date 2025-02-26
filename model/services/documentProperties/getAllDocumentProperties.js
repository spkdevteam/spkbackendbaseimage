const getDocumentPropertiesAll = async ({ page, perPage, searchKey="", clientId}) => {
    try {
        return {status: true, message: "Fetch all Document Proterties", data:[
            {
                "_id": "67b037ae038ce3ffbb097924",
                "PropertyName": "Authority",
                "Type": "String",
                "createdAt": "2024-02-25T12:00:00Z",
                "updatedAt": "2024-02-25T12:10:00Z"
            },
            {
                "_id": "67b037ae038ce3ffbb097925",
                "PropertyName": "Validity",
                "Type": "Date",
                "createdAt": "2024-02-24T15:30:00Z",
                "updatedAt": "2024-02-24T16:00:00Z"
            },
            {
                "_id": "67b037ae038ce3ffbb097926",
                "PropertyName": "Image",
                "Type": "String",
                "createdAt": "2024-02-23T10:20:00Z",
                "updatedAt": "2024-02-23T10:45:00Z"
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
        return {status: false, message: "Fail to get all Document Properties", error: error.message}
    }
}
module.exports=getDocumentPropertiesAll