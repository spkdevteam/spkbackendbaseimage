const { getClientDatabaseConnection } = require("../../connection");
const departmentSchema = require("../../department");
const getserialNumber = require("../../serialNumber.jss/getSerialNumber");
const { stringValidation, clientIdValidation, booleanValidation, emptyStringValidation } = require("../validation/validation");

const createDepartmentFn = async ({ deptName, reportingDept, description, isActive, clientId }) => {
    try {

        let isActiveBoolean = true;


        if(isActive === "false"){
            isActiveBoolean = false;
        }


        if(isActive !== "false" && isActive !== "true") return { status: false, message: "Oops, try again later."}
        
        const validation = [
            stringValidation({ string: deptName, name: "Department: " }),
            emptyStringValidation({ string: reportingDept, name: "Reporting department: " }),
            emptyStringValidation({ string: description, name: "Description: " }),
            booleanValidation({ boolean: isActiveBoolean, name: "Active status: " }),
            clientIdValidation({ clientId })
        ];


        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

    

        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);


        const serialNumber = await getserialNumber("department", clientId, "");

        const absSerialNumber = Math.abs(serialNumber);

        const department = new Department({
            deptName: deptName,
            displayId: absSerialNumber,
            companyId: null,
            description,
            deletedAt: null,
            isActive: isActiveBoolean,
            old_Id: null,
            createdBy: null
        })

        const savedDepartment = await department.save();

        if(!savedDepartment) return { status: false, message: "Operation failed try again later"};


        return { status: true, message: "New department is created", data: savedDepartment};
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = createDepartmentFn;