const { default: mongoose } = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const departmentSchema = mongoose.Schema({
    deptName: { type: String },
    displayId: { type: String, unique: true },
    description: { type: String },
    shift: [{ type: mongoose.Types.ObjectId, ref: "shift", index: true }],
    companyId: { type: ObjectId, ref: "company", index: true },
    createdBy: { type: ObjectId, ref: "users", index: true },
    editedBy: { type: ObjectId, ref: "users", indeX: true },
    deletedBy: { type: ObjectId, ref: "users", index: true },
    deletedAt: { type: Date, default: null },
    old_Id: { type: String, default: null },
    isActive: { type: Boolean, default: true }
},
    {
        timestamps: true
    });

//to save the department
departmentSchema.statics.insertDepartment = async function ({ _id = null, displayId, userId, deptName, companyId, description, shift }) {
    try {
        const department = new this({
            createdBy: userId, displayId, deptName, companyId, description, shift
        });

        if (_id) {
            department.oldId = _id;
        }

        const savedDepartment = await department.save();
        return { status: true, message: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to update the department
departmentSchema.statics.updateDepartment = async function ({ userId, departmentId, deptName, description, shift }) {
    try {
        const department = await this.findOne({ _id: departmentId, deletedAt: null });
        if (!department) return { status: false, message: "Network problem, try again" };


        department.editedBy = userId;
        department.deptName = deptName;
        department.description = description;
        department.shift = shift;


        const savedDepartment = await department.save();

        return { status: true, message: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
}

//to soft delete the department
departmentSchema.statics.softDeleteDespartment = async function ({ userId, departmentId }) {
    try {
        const department = await this.findOne({ _id: departmentId, deletedAt: null });
        if (!department) return { status: false, message: "Network problem, Try again" };

        department.deletedAt = new Date();
        department.deletedBy = userId;

        const savedDepartment = await department.save();
        return { status: true, message: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness of the designation
departmentSchema.statics.toggleDepartment = async function ({ userId, departmentId }) {
    try {
        const department = await this.findOne({ _id: departmentId, deletedAt: null });
        if (!department) return { status: false, message: "Network problem, Try again" };

        department.editedBy = userId;
        department.isActive = !department.isActive;

        const savedDepartment = await department.save();
        return { status: true, message: savedDepartment };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

const Department = mongoose.model('Department', departmentSchema)

module.exports = { departmentSchema, Department };