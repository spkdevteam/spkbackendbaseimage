const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const departmentSchema = require("../../department");
const { clientIdValidation } = require("../validation/validation");

const getOneDepartmentFn = async ({ id, clientId }) => {
    try {
        console.log(id, clientId)
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid designation ID" };
        }


        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);

        const department = await Department.findOne({ _id: id, deletedAt: null });

        if (!department) return { status: false, message: "Try again!!", data: {} };

        return { status: true, message: "User is here", data: department }
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = getOneDepartmentFn;