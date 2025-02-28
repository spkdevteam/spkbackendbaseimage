const userProfileDownloadDocument = async () =>{
    try {
        return {status: true, message: "Documents downloaded successfully from user profile", data:{
            user: {
                name: "John Doe",
                email: "john.doe@example.com",
                profileImage: "https://example.com/images/john_doe.jpg",
                createdAt: "2024-01-15T10:30:00Z"
            },
            documents: [
                { documentId: "doc_101", title: "Passport", type: "PDF", uploadedAt: "2024-02-10T14:20:00Z", downloadUrl: "https://example.com/documents/passport.pdf" },
                { documentId: "doc_102", title: "Driving License", type: "PDF", uploadedAt: "2024-03-05T09:10:00Z", downloadUrl: "https://example.com/documents/driving_license.pdf" },
                { documentId: "doc_103", title: "Resume", type: "DOCX", uploadedAt: "2024-04-12T11:45:00Z", downloadUrl: "https://example.com/documents/resume.docx" }
            ]
        }
        }
    } catch (error) {
        console.log("Error in downloading document", error);
        return {status: false, message: "Failed to download document", error: error.message}
    }
}
module.exports = userProfileDownloadDocument