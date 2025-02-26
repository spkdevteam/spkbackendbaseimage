const getDocumentsByRoleIdFn = async ({ roleId, clientId }) => {
    try {
        return {
            status: true, message: "Here are all the documents of this role", data: [{
                "name": "aadhar",
                "authority": "govt of india",
                "validity": "aadhar number",
                "image": "https://s3.aws.amazon.com/blahblahblah",
                "validation": "life time"
            },
            {
                "name": "Pan Card",
                "authority": "govt of india",
                "validity": "Pan number",
                "image": "https://s3.aws.amazon.com/blahblahblah",
                "validation": "life time"
            }]
        }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = getDocumentsByRoleIdFn;