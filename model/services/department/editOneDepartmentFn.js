const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const departmentSchema = require("../../department");
const { stringValidation, emptyStringValidation, clientIdValidation, booleanValidation } = require("../validation/validation");

const editOneDepartmentFn = async ({ id, deptName, description, isActive, clientId }) => {
    try {
        let isActiveBoolean = true;


        if (isActive === "false") {
            isActiveBoolean = false;
        }


        const validation = [
            stringValidation({ string: deptName, name: "Department name: " }),
            emptyStringValidation({ string: description, name: "Description: " }),
            clientIdValidation({ clientId }),
            booleanValidation({ boolean: isActiveBoolean, name: "Active status: " })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid designation ID" };
        };


        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);

        const department = await Department.findOne({ _id: id, deleted: null });

        if (!department) return { status: false, message: "Oops try again." };


        department.deptName = deptName;
        department.description = description;
        department.isActive = isActive;

        const savedDepartment = await department.save();

        if (!savedDepartment) return { status: false, message: "Try again, some internal error" };

        return { status: true, message: "Department updated successfully", data: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editOneDepartmentFn;