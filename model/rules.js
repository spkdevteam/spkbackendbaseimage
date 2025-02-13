const mongoose = require("mongoose");

const rulesSchema = new mongoose.Schema(
  {
    rulesName: { type: String, required: true },
    apiId: { type: mongoose.Types.ObjectId, ref: 'api', required: true },
    departmentId: { type: mongoose.Types.ObjectId, ref: 'CompDepartment', default: null },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: mongoose.Types.ObjectId, ref: 'user', default: null },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
    editedBy: { type: mongoose.Types.ObjectId, ref: 'user', default: null },
    companyId: { type: ObjectId, ref: "company", default: null, index: true },
  },
  { timestamps: true }
);

// Instance method for soft delete
rulesSchema.methods.softDelete = function (userId, callback) {
  this.deletedAt = new Date();
  this.deletedBy = userId;
  return this.save(callback);
};

// Instance method for updating rule
rulesSchema.methods.updateRule = function (updateData, userId, callback) {
  Object.assign(this, updateData);
  this.editedBy = userId;
  return this.save(callback);
};

const Rules = mongoose.model('Rules', rulesSchema);

module.exports = rulesSchema;
