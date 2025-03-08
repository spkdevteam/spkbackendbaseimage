const { default: mongoose } = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const departmentSchema = mongoose.Schema({
    deptName: { type: String },
    displayId: { type: String, unique: true },
    companyId: { type: ObjectId, ref: "company", index: true },
    description: { type: String },
    deletedAt: { type: Date, default: null },
    isActive: { type: Boolean, default: true },
    old_Id: { type: String, default: null },
    shift: [{ type: mongoose.Types.ObjectId, ref: "shift", index: true }],
    createdBy: { type: ObjectId, ref: "users", default: null, index: true }
},
    {
        timestamps: true
    });

//to save the department
departmentSchema.statics.insertDepartment = async function ({ userId, deptName, companyId, description, shift }) {
    try {
        const department = new this({
            createdBy: userId, deptName, companyId, description, shift
        });

        const savedDepartment = await department.save();
        return { status: true, department: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to update the department
departmentSchema.statics.updateDepartment = async function ({ userId, departmentId, deptName, description, shift }) {
    try {
        const department = await this.constructor.findOne({ _id: departmentId, deletedAt: null });
        if (!department) return { status: false, message: "Network problem, try again" };


        department.editedBy = userId;
        department.deptName = deptName;
        department.description = description;
        department.shift = shift;


        const savedDepartment = await department.save();

        return { status: true, department: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

//to soft delete the department
departmentSchema.statics.softDeleteDespartment = async function ({ userId, departmentId }) {
    try {
        const department = await this.constructor.findOne({ _id: departmentId, deletedAt: null });
        if (!department) return { status: false, message: "Network problem, Try again" };

        department.deletedAt = new Date();
        department.deletedBy = userId;

        const savedDepartment = await department.save();
        return { status: true, designation: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness of the designation
departmentSchema.statics.toggleDepartment = async function ({ userId, departmentId }) {
    try {
        const department = await this.constructor.findOne({ _id: departmentId, deletedAt: null });
        if (!department) return { status: false, message: "Network problem, Try again" };

        department.editedBy = userId;
        department.isActive = !department.isActive;

        const savedDepartment = await department.save();
        return { status: true, designation: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

const Department = mongoose.model('Department', departmentSchema)

module.exports = { departmentSchema, Department };