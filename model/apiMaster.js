const mongoose = require("mongoose");
const { Types } = mongoose;
const ObjectId = Types.ObjectId;


const apiSchema = new mongoose.Schema(
  {
    apiName: { type: String, required: true, unique: true },
    apiPath: { type: String, required: true, unique: true },
    menuId: { type: ObjectId, ref: "menu", index: true },
    companyId: { type:ObjectId, ref: "company", index: true},
    isActive: { type: Boolean, default: true },
    createdBy: { type: ObjectId, ref: "user", index: true },
    editedBy: { type: ObjectId, ref: "user", index: true },
    deletedBy: { type: ObjectId, ref: "user", index: true },
    deletedAt: { type: Date, default: null },
    oldId: { type: String },

  },
  { timestamps: true }
);

// Instance method for soft delete:
//[ api document is being fetched using ApiId sent by frontend which is _id of mongo  
//id of deletor (deletedByUser) is also being stored]
apiSchema.statics.softDeleteApiMaster = async function ({ apiId, userId }) {
  try {
    const api = await this.findOne({ _id: apiId });
    if (!api) return { status: false, message: "API doesn't exist" };
    api.deletedAt = new Date();
    api.deletedBy = userId;
    const softDeletedApi = await api.save();
    return { status: true, message: softDeletedApi };
  }
  catch (error) {
    return { status: false, message: error.message };
  }
};


//Instance for insert : [new API is being created]
apiSchema.statics.insertApiMaster = async function ({ _id = null, userId, apiName, apiPath, companyId, menuId }) {
  try {
    const newApi = new this({
      apiName,
      apiPath,
      createdBy: userId,
      menuId,
      companyId
    });

    if (_id) {
      newApi.oldId = _id;
    };

    const savedApi = await newApi.save();
    return { status: true, message: savedApi };
  }
  catch (error) {
    return { status: false, message: error.message };
  }
};

//Instance for update: 
// [One is updating api details, 
// (ApiId) is the mongo _id of particluar api document sent by frontend
//editedByUser is the id of the person editing the api ]

apiSchema.statics.updateApiMaster = async function ({ apiId, apiName, apiPath, userId }) {
  try {
    const api = await this.findOne({ _id: apiId });
    if (!api) return { status: false, message: "API doesn't exist" };
    api.apiName = apiName;
    api.apiPath = apiPath;
    api.editedBy = userId;
    const updatedApi = await api.save();
    return { status: true, message: updatedApi };
  }
  catch (error) {
    return { status: false, message: error.message };
  }
};

//Instance for toggle :
// [One with access is toggling i.e changing the isActive status of the api
// (ApiId) is the mongo _id of particluar api document sent by frontend
//toggledByUser is the id of the person toggling the api ]
apiSchema.statics.toggleApiMaster = async function ({ apiId, userId }) {
  try {
    const api = await this.findOne({ _id: apiId, deletedAt: null });
    if (!api) return { status: false, message: "API doesn't exist" };
    api.isActive = !api.isActive;
    api.editedBy = userId;
    const toggledApi = await api.save();
    return { status: true, message: toggledApi };
  }
  catch (error) {
    return { status: false, message: error.message };
  }

};

const Api = mongoose.model("api", apiSchema);

module.exports = { Api, apiSchema };
