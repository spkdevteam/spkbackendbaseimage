const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema(
  {
    APIName: { type: String, required: true, unique: true },
    path: { type: String, required: true, unique: true },
    deletedAt: { type: Date, default: null },
    isActive: {type: Boolean, default: true},
    menu: {type: mongoose.Types.ObjectId, ref: "Rules", default: null, index: true}
  },
  { timestamps: true }
);

// Instance method for soft delete
apiSchema.methods.softDelete = function (callback) {
  this.deletedAt = new Date();
  return this.save(callback);
};

const Api = mongoose.model("api", apiSchema);

module.exports = apiSchema;
