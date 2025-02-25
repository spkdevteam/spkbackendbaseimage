const getOneDutyAndResponsibilityFn = async ({ id, clientId}) => {
    try {
        return { status: true, message: "Here is the duty.", data: {
            _id: id,
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