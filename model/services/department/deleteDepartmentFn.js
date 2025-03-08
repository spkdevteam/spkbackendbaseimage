const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { departmentSchema } = require("../../department");
const { clientIdValidation } = require("../validation/validation");

const deleteDepartmentFn = async ({ userId, departmentId, clientId }) => {
    try {
        //validating the ids
        if (!mongoose.Types.ObjectId.isValid(departmentId)) {
            return { status: false, message: "Invalid department ID" };
        };

        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);

        const department = await Department.softDeleteDespartment({ userId, departmentId });

        if (!department.status) return { status: false, message: "Operation failed, try again." };

        return { status: true, message: "Department is deleted" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}


module.exports = deleteDepartmentFn;