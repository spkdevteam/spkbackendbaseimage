const getOneDutyAndResponsibilityFn = async ({ id, companyId, clientId}) => {
    try {
        return { status: true, message: "Here is the duty.", data: {
            dutyId: id,
            companyId,
            deptName: "demoDepartment",
            designation: "demoDesignation",
            rules: "demoRule",
            documents: "demoDescription"
        }}
    } catch (error) {
        return { status: false, message: error.message}
    }
}

module.exports = getOneDutyAndResponsibilityFn;