
const getByIdDocumentProperties = async ({clientId, id}) => {
    try {
        return {status: true, message:"Fetch Document Property By Id", data:{
            "_id": "67b037ae038ce3ffbb097924",
            "PropertyName": "Authority",
            "Type": "String",
            "clientId": "6788abe40db7c3b61ed93c70",
            "createdAt": "2024-02-25T12:00:00Z",
            "updatedAt": "2024-02-25T12:10:00Z"

        }}
    } catch (error) {
        return {status: false, message: "Fail to get Document Properties by id", error: error.message}
    }
}
module.exports= getByIdDocumentProperties