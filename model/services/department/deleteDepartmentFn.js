const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const departmentSchema = require("../../department");
const { clientIdValidation } = require("../validation/validation");

const deleteDepartmentFn = async ({ id, clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid designation ID" };
        };


        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);


        const department = await Department.findOneAndUpdate({ _id: id, deletedAt: null }, { deletedAt: Date.now() }, { new: true });


        if (!department) return { status: false, message: "Error occurred, try again." };

        return { status: true, message: "Department is deleted" };
    } catch (error) {
        return { status: false, message: error.message };
    }
}


module.exports = deleteDepartmentFn;