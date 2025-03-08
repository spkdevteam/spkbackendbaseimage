const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId
const apiSchema = new mongoose.Schema(
  {
    APIName: { type: String, required: true, unique: true },
    apiPath: { type: String, required: true, unique: true },
    deletedAt: { type: Date, default: null },
    isActive: { type: Boolean, default: true },
    createdBy: { type: Boolean, default: true },
    menuid: { type: mongoose.Types.ObjectId, ref: "Menu", default: null, index: true },
    editedBy: { type: ObjectId, ref: "user", index: true },
    oldId: { type: ObjectId, index: true, default: null },
    deletedBy: { type: ObjectId, ref: "user", index: true },

  },
  { timestamps: true }
);

// Instance method for soft delete:
  //[ api document is being fetched using ApiId sent by frontend which is _id of mongo  
    //id of deletor (deletedByUser) is also being stored]
apiSchema.methods.softDeleteApiMaster = async function ({ ApiId, deletedByUser}) {
  try{
    const api = this.constructor.findOne({_id : ApiId, deletedAt : null }); //ensuring api is non-deleted
    if(!api) return {status : false , message : "API doesn't exist"};
    api.deletedAt = new Date();
    api.deletedBy = deletedByUser;
    const softDeletedApi = await api.save();
    return {status : true, api : softDeletedApi};
  }
  catch(error){
    console.error("Error Soft deleting API is:", error);
    return { status: false, message: error.message };
  }
};


//Instance for insert : [new API is being created]
apiSchema.methods.insertApiMaster = async function ({ APIName, apiPath, deletedAt, createdBy, menuid, oldId }) {
  try{
    const newApi = new this.constructor({
      APIName, 
      apiPath, 
      deletedAt, 
      createdBy, 
      menuid, 
      oldId
    });
  const savedApi = await newApi.save();
  return { status: true, api: savedApi };
  }
  catch(error){
    console.error("Error inserting new API is:", error);
    return { status: false, message: error.message };
  }
}

//Instance for update: 
    // [One is updating api details, 
    // (ApiId) is the mongo _id of particluar api document sent by frontend
    //editedByUser is the id of the person editing the api ]

apiSchema.methods.updateApiMaster = async function ({ ApiId, APIName, apiPath, editedByUser }) {
  try{
    const api = await this.constructor.findOne({ _id: ApiId, deletedAt: null }); //ensuring api is non-deleted
    if(!api) return { status: false, message: "API doesn't exist" };
    api.APIName = APIName;
    api.apiPath = apiPath;
    api.editedById = editedByUser;
    const updatedApi = await api.save();
    return {success : true, api : updatedApi};
  }
  catch(error)
  {
    console.error("Error updating API is:", error);
    return { status: false, message: error.message };
  }
}

//Instance for toggle :
    // [One with access is toggling i.e changing the isActive status of the api
    // (ApiId) is the mongo _id of particluar api document sent by frontend
    //toggledByUser is the id of the person toggling the api ]
apiSchema.methods.toggleApiMaster = async function ({ ApiId, toggledByUser }) {
  try{
    const api = await this.constructor.findOne({_id : ApiId, deletedAt : null}); //ensuring api is non-deleted
    if(!api) return { status: false, message: "API doesn't exist" };
    api.isActive = !api.isActive;
    api.editedBy = toggledByUser;
    const toggledApi = await api.save();
    return {success : true, api : toggledApi};
  }
  catch(error){
    console.error("Error toggling API is:", error);
    return { status: false, message: error.message };
  }

}

const Api = mongoose.model("api", apiSchema);

module.exports = { Api,apiSchema };
