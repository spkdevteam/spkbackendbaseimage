const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { departmentSchema } = require("../../department");
const getserialNumber = require("../../serialNumber.jss/getSerialNumber");
const { stringValidation, clientIdValidation, emptyStringValidation } = require("../validation/validation");

const createDepartmentFn = async ({ _id = null, userId, deptName, companyId, description, shift, clientId }) => {
    try {
        //checking the ids
        switch(true){
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id, try again"};
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company id, try again"};
        };

        if(_id && !mongoose.Types.ObjectId.isValid(_id)){
            return {status: false, message: "Invalid _id, try again"};
        };

        //validating
        const validation = [
            stringValidation({ string: deptName, name: "department name: " }),
            emptyStringValidation({ string: description, name: "description: " }),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };
    
        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);

        //generating serial number
        const serialNumber = await getserialNumber("department", clientId, "");

        //making it an absolute number
        const absSerialNumber = Math.abs(serialNumber);

        //creating new department
        const department = await Department.insertDepartment({
            _id,
            displayId: absSerialNumber,
            userId,
            deptName,
            companyId,
            description,
            shift
        });
        console.log("====================", department);

        //checking wheather the creating department was done or not
        if(!department?.status) return { status: false, message: "Operation failed try again later"};
        console.log("//////////////////", department.userId);
        return { status: true, message: "New department is created", data: {_id: department.department._id} };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createDepartmentFn;