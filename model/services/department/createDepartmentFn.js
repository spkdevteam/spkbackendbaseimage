const mongoose  = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { departmentSchema } = require("../../department");

const {  clientIdValidation, emptyStringValidation, stringValidationWithAll } = require("../validation/validation");
const getserialNumber = require("../../serialNumber.jss/getSerialNumber");

const createDepartmentFn = async ({ _id = null, userId, deptName, companyId, description, shift, clientId }) => {
    try {
        //checking the ids
        switch (true) {
            case !mongoose.Types.ObjectId.isValid(userId):
                return { status: false, message: "Invalid user id, try again" };
            case !mongoose.Types.ObjectId.isValid(companyId):
                return { status: false, message: "Invalid company id, try again" };
        };

        if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
            return { status: false, message: "Invalid _id, try again" };
        };

        //validating
        const validation = [
            stringValidationWithAll({ string: deptName, name: "department name: " }),
            emptyStringValidation({ string: description, name: "description: " }),
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(", ") };

        //establishing connection to the db
        const db = await getClientDatabaseConnection(clientId);
        const Department = await db.model("Department", departmentSchema);
        const alreadyExists = await Department.findOne({deptName: deptName, companyId: companyId})
        if(alreadyExists){
            return {status: false, message: "Duplicate deptName cannot be exists with same companyId"}
        }
        console.log("first", alreadyExists);

        //generating serial number
        const serialNumber = await getserialNumber("department", clientId, "Dept")

        console.log(serialNumber,);

        //making it an absolute number


        //creating new department
        const department = await Department.insertDepartment({
            _id,
            displayId: serialNumber,
            userId,
            deptName,
            companyId,
            description,
            shift
        });
        console.log("====================", department);
        
        
        
        //checking wheather the creating department was done or not
        if (!department?.status) return { status: false, message: "Operation failed try again later" };
        console.log("//////////////////", department.userId);
        return { status: true, message: "New department is created", data: { _id: department.department._id } };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createDepartmentFn;