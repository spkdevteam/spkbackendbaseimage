const createDutyAndResponsibilityFn = async ({ deptName, designation, rules, documents, companyId, clientId}) => {
    try {
        return {status: true, message: "New duty created", data: {
            _id: "67b037ae038ce3ffbb097924",
        }}
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createDutyAndResponsibilityFn;