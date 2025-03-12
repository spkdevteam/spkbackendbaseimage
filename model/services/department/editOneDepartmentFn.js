const mongoose  = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const {departmentSchema} = require("../../department");
const { stringValidation, emptyStringValidation, clientIdValidation, mongoIdValidation } = require("../validation/validation");

const editOneDepartmentFn = async ({ id, deptName, editedBy, shift, description, clientId, userId }) => {
    try {
        //validating
        const validation = [
            stringValidation({ string: deptName, name: "Department name: " }),
            emptyStringValidation({ string: description, name: "Description: " }),
            clientIdValidation({ clientId }),
            mongoIdValidation({_id: userId})
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid department ID" };
        };

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);


        // Check if the document exists and belongs to the user
        const existingDepartment = await Department.findOne({ _id: id, deletedAt: null });

        if (!existingDepartment) {
            return { status: false, message: "Department not found" };
        }


        if(existingDepartment.deptName === deptName && existingDepartment.description === description) return { status: false, message: "No change done."};


        const updatedDept = await Department.updateDepartment({ 
            departmentId: id,
            deptName,
            description,
            userId,
            shift: shift

        });
        if(!updatedDept?.status){
            return { status: false, message: "Department updation failed."};

        }
        return { status: true, message: "Department updated successfully.",};


    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = editOneDepartmentFn;