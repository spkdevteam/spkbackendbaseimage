const getPaginatedHolidayFn = async ({ page, perPage, searchKey = "", companyId, clientId }) => {
    try {
        return {
            status: true, message: "Successfully fetched the olidays", data: [
                {
                    holidayId: "67bc3c3fd0fc20776adab0b6",
                    companyId: "67b330d40e76630289fa945d",
                    holiday: "September 10, 2025 00:00",
                    holidayName: "Durga Puja",
                    deletedAt: null,
                    deletedBy: null,
                    createdBy: "67b5c5f8b16bd2ccf5927d31",
                    editedBy: null,
                    isActive: false,
                    companyId: "67b32661425c6067035df2f7",
                    createdAt: "2025-02-24T09:30:39.657Z",
                    updatedAt: "2025-02-24T10:28:52.398Z",
                    __v: 0
                },
                {
                    holidayId: "67bc3c4dd0fc20776adab0ba",
                    companyId: "67b330d40e76630289fa945d",
                    holiday: "September 10, 2025 00:00",
                    holidayName: "Durga Puja",
                    deletedAt: null,
                    deletedBy: null,
                    createdBy: "67b5c5f8b16bd2ccf5927d31",
                    editedBy: null,
                    isActive: false,
                    companyId: "67b32661425c6067035df2f7",
                    createdAt: "2025-02-24T09:30:53.500Z",
                    updatedAt: "2025-02-24T09:30:53.500Z",
                    __v: 0
                },
                {
                    holidayId: "67bc3c58d0fc20776adab0bc",
                    companyId: "67b330d40e76630289fa945d",
                    holiday: "September 10, 2025 00:00",
                    holidayName: "Durga Puja",
                    deletedAt: null,
                    deletedBy: null,
                    createdBy: "67b5c5f8b16bd2ccf5927d31",
                    editedBy: null,
                    isActive: false,
                    companyId: "67b32661425c6067035df2f7",
                    createdAt: "2025-02-24T09:31:04.896Z",
                    updatedAt: "2025-02-24T09:31:04.896Z",
                    __v: 0
                }],
            metaData: {
                currentPage: page,
                perPage,
                searchKey,
                totalDocs: 20,
                totalPages: 2,

            }
        }
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getPaginatedHolidayFn;