const { getClientDatabaseConnection } = require("../../connection");
const departmentSchema = require("../../department");
const { clientIdValidation } = require("../validation/validation");

const deleteDepartmentFn = async ({ id, clientId}) => {
    try {
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };


        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);


        const department = await Department.findOne({ _id: id, deletedAt: null });


        if(!department) return { status: false, message: "There is no department"};


        department.deletedAt = Date.now();

        const savedDepartment = await department.save();


        if(!savedDepartment) return { status: false, message: "Oops try again"};


        return { status: true, message: "Department is deleted"};
    } catch (error) {
        return { status: false, message: error.message };
    }
}


module.exports = deleteDepartmentFn;