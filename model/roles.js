const { default: mongoose } = require("mongoose")
const { Types } = mongoose;
const ObjectId = Types.ObjectId;


const rolesSchema = new mongoose.Schema({
    departmentId: { type: ObjectId, ref: "department", index: true, required: true },
    companyId: { type: ObjectId, ref: "company", index: true, required: true },
    designationId: { type: ObjectId, ref: "company", index: true, required: true },
    leaveDetails: [{ type: Object, default: [] }],
    permissions: [{
        ruleId: { type: ObjectId, ref: "rule", index: true },
        ruleName: { type: String, default: "" },
        apiId: { type: ObjectId, ref: "api", index: true },
        menuId: { type: ObjectId, ref: "menu", index: true },
        access: { type: Boolean, default: true }
    }],
    documents: [{
        docId: { type: ObjectId, ref: "documentMaster", index: true },
        docName: { type: String },
        property: [{
            frontImage: { type: String },
            backImage: { type: String },
            number: { type: String },
        }],
        manadatory: { type: Boolean, default: true },
        companyIdForDoc: { type: ObjectId, ref: "company" }
    }],
    createdBy: { type: ObjectId, ref: "user", default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", default: null, index: true },
    deletedAt: { type: Date, default: null },
    oldId: { type: String, default: null },
    isActive: { type: Boolean, default: true }
});

//to save the role
rolesSchema.methods.insertRole = async function ({ userId, departmentId, companyId, designationId, leaveDetails = [], permissions = [], documents = [] }) {
    try {
        const role = new this({
            createdBy: userId, departmentId, companyId, designationId, leaveDetails, permissions, documents
        });

        const savedRole = await role.save();
        return { status: true, role: savedRole };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to update the role
rolesSchema.methods.updateRole = async function ({ userId, roleId, leaveDetails = [], permissions = [], documents = [] }) {
    try {
        const role = await this.constructor.findOne({ _id: roleId, deletedAt: null });

        if (!role) return { status: false, message: "Network problem, try again" };


        role.editedBy = userId;
        role.leaveDetails = leaveDetails;
        role.permissions = permissions;
        role.documents = documents;


        const savedRole = await department.save();

        return { status: true, role: savedRole };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to soft delete the role
rolesSchema.methods.softDeleteRole = async function ({ userId, roleId }) {
    try {
        const role = await this.constructor.findOne({ _id: roleId, deletedAt: null });
        if (!role) return { status: false, message: "Network problem, Try again" };

        role.deletedAt = new Date();
        role.deletedBy = userId;

        const savedRole = await role.save();
        return { status: true, designation: savedRole };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

//to toggle the activeness of the role
rolesSchema.methods.toggleRole = async function ({ userId, roleId }) {
    try {
        const role = await this.constructor.findOne({ _id: roleId, deletedAt: null });
        if (!role) return { status: false, message: "Network problem, Try again" };

        role.editedBy = userId;
        role.isActive = !role.isActive;

        const savedRole = await role.save();
        return { status: true, designation: savedRole };
    } catch (error) {
        return { status: false, message: error.message };
    }
};

const Role = mongoose.model("Role", rolesSchema);

module.exports = { rolesSchema, Role };