const getPaginatedDutyAndResponsibilityFn = async ({ page = 1, perPage = 10, searchKey = "", companyId, clientId }) => {
    try {
        return {
            status: true, message: "Successfully fetched the duties", data: [
                {
                    dutyId: "67bc3c3fd0fc20776adab0b6",
                    companyId: "67c04caf42adcc1853fa464d",
                    rulesName: "firstDuty",
                    apiId: "67b32661425c6067035df2f7",
                    departmentId: "67b32661425c6067035df2f7",
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
                    dutyId: "67bc3c4dd0fc20776adab0ba",
                    companyId: "67c04caf42adcc1853fa464d",
                    rulesName: "secondDuty",
                    apiId: "67b32661425c6067035df2f7",
                    departmentId: "67b32661425c6067035df2f7",
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
                    dutyId: "67bc3c58d0fc20776adab0bc",
                    companyId: "67c04caf42adcc1853fa464d",
                    rulesName: "thirdDuty",
                    apiId: "67b32661425c6067035df2f7",
                    departmentId: "67b32661425c6067035df2f7",
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
};

module.exports = getPaginatedDutyAndResponsibilityFn;