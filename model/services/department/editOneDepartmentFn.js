const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const departmentSchema = require("../../department");
const { stringValidation, emptyStringValidation, clientIdValidation, booleanValidation } = require("../validation/validation");

const editOneDepartmentFn = async ({ id, deptName, description, clientId }) => {
    try {
        const validation = [
            stringValidation({ string: deptName, name: "Department name: " }),
            emptyStringValidation({ string: description, name: "Description: " }),
            clientIdValidation({ clientId }),
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid designation ID" };
        };


        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);


        // Check if the document exists and belongs to the user
        const existingDepartment = await Department.findOne({ _id: id, deletedAt: null });

        if (!existingDepartment) {
            return { status: false, message: "Designation not found" };
        }


        if(existingDepartment.deptName === deptName && existingDepartment.description === description) return { status: false, message: "No change done."};


        const updatedDept = await Department.updateOne({ _id: id, deletedAt: null }, { $set: { deptName, description } });

        if (updatedDept.modifiedCount > 0) return { status: true, message: "Successfully updated department." };

        return { status: false, message: "Department updation failed."};
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editOneDepartmentFn;