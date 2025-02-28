const leaveOfAllLoggedInEmployeesFn = async ({ page = 1, perPage = 10, companyId, clientId }) => {
    try {
        return {
            status: true, message: "Leave of all the logged in employees", data: [
                {
                    Name: "Peter jones",
                    Address: "68/2 Southeast road, London",
                    country: "England",
                },
                {
                    Name: "Devon james",
                    Address: "New gate street, New york",
                    country: "United States",
                },
                {
                    Name: "Adam Park",
                    Address: "28 Steve harvey street, Minnesota",
                    country: "United States",
                }
            ],
            metaData: {
                currentPage: page,
                perPage: perPage,
                totalDocs: 20,
                totalPages: 5,
            }
        }
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = leaveOfAllLoggedInEmployeesFn;