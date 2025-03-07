const mongoose = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const rulesSchema = new mongoose.Schema(
  {
    ruleName: { type: String, required: true },
    apiId: { type: ObjectId, ref: "api", index: true },
    menuId: { type: ObjectId, ref: "menu", index: true },
    companyId: { type: ObjectId, ref: "company", index: true },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: ObjectId, ref: "user", index: true, default: null },
    createdBy: { type: ObjectId, ref: "user", index: true },
    editedBy: { type: ObjectId, ref: "user", index: true, default: null },
    isActive: { type: Boolean, default: true },
    oldId: { type: String, default: null }
  },
  { timestamps: true }
);

//to save the rule
rulesSchema.statics.insertRule = async function ({ _id=null,userId, ruleName, apiId, menuId, companyId }) {
  try {
    const rule = new this({
      createdBy: userId, ruleName, apiId, menuId, companyId
    });

    if(_id){
      rule.oldId = _id;
    };

    const savedRule = await rule.save();

    return { status: true, rule: savedRule };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

// to update the rule
rulesSchema.statics.updateRule = async function ({ userId, ruleId, ruleName }) {
  // Object.assign(this, updateData);
  // this.editedBy = userId;
  try {
    const rule = await this.findOne({ _id: ruleId });
    rule.ruleName = ruleName;
    rule.editedBy = userId;


    const savedRule = await rule.save();
    return { status: true, rule: savedRule };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

// to update rule to soft delete
rulesSchema.statics.softDeleteRule = async function ({ userId, ruleId }) {
  try {
    const rule = await this.findOne({ _id: ruleId });
    if(!rule) return { status: false, message: "Network problem, try again"};

    rule.deletedAt = new Date();
    rule.deletedBy = userId;

    const savedRule = await rule.save();
    return { status: true, rule: savedRule };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

//to toggle the activeness of the rule
rulesSchema.statics.toggleRule = async function name({ ruleId, userId }) {
  try {
    const rule = await this.findOne({ _id: ruleId, deletedAt: null });
    if(!rule) return { status: false, message: "Network problem, try again"};

    rule.editedBy = userId;
    rule.isActive = !rule.isActive;

    const savedRule = await rule.save();
    return { status: true, rule: savedRule };
  } catch (error) {
    return { status: false, message: error.message };
  }
};


const Rules = mongoose.model('Rule', rulesSchema);

module.exports = { rulesSchema, Rules };
