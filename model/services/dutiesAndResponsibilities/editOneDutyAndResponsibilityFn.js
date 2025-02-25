const editOneDutyAndResponsibilityFn = async ({ deptName, designation, rules, documents, clientId }) => {
    try {
        return { status: true, message: "Updated successfully."};
    } catch (error) {
        return {status: false, message: error.message };
    }
}

module.exports = editOneDutyAndResponsibilityFn;