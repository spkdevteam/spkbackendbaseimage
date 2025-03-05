const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const documentPropertiesSchema = new Schema(
    {
        PropertyName: {
            type: String,
            required: true
        },
        Type: {
            type: String,
            trim: true,
            enum: ["String", "Date", "Number", "Boolean"],
            required: true
        },
        companyId: {
            type: ObjectId,
            ref: "Company",
            default: null,
            index: true
        },
        isActive: { type: Boolean, default: true },
        createdBy: { type: ObjectId, ref: "user", index: true },
        deletedAt: { type: Date, default: null, index: true },
        editedBy: { type: ObjectId, ref: "user", index: true },
        oldId: { type: ObjectId, index: true, default: null },
        deletedBy: { type: ObjectId, ref: "user", index: true },
    },
    { timestamps: true }
);

// Instance method for soft delete
    //[ documentProperties is being fetch using by documentPropertiesId sent by frontend which is _id of mongo  
    //id of deletor (deletedByUser) is also being stored]
documentPropertiesSchema.methods.softDeleteDocumentProperties = async function ({documentPropertiesId, deletedByUser}) {
    try{
        const documentProperties = await this.constructor.findOne({ _id: documentPropertiesId, deletedAt: null }); //ensuring documentProperties is non-deletd
        if (!documentProperties) return { status: false, message: "documentProperties doen't exist" };
        documentProperties.deletedAt = new Date();
        documentProperties.deletedBy = deletedByUser;
        const softDeletedDocumentProperties = await documentProperties.save();
        return { status: true, documentProperties: softDeletedDocumentProperties };
    }
    catch(error){
        console.error("Error Soft deleting document properties is:", error);
        return { status: false, message: error.message };
    }
   
};

//instance method for insert : [New DocumentProperties are being created]

documentPropertiesSchema.methods.insertDocumentProperties = async function ({ PropertyName, Type, companyId, createdBy:userId, oldId }) {
    try{
        const newDocProperties = new this.constructor({
            PropertyName, 
            Type, 
            companyId, 
            createdBy:userId, 
            oldId
            });
        const savedDocProperties = await newDocProperties.save();
        return {success : true, documentProperties : savedDocProperties};
    }
    catch(error){
        console.error("Error in inserting new document properties is",error);
        return {success : false, message : error.message};
    }
}

//instance method for update: 
    // [One is updating documentProperties details, 
    // (documentPropertiesId) is the mongo _id of particluar documentProperties document sent by frontend
    //editedByUser is the id of the person editing the documentProperties ]

documentPropertiesSchema.methods.updateDocumentProperties = async function ({ documentPropertiesId, PropertyName, Type, editedByUser }) {
    try{
        const documentProperties = await this.constructor.findOne({_id : documentPropertiesId, deletedAt : null}); //ensuring document isnt deleted
        if (!documentProperties) return {success : false, message : "Document Properties don't exist"};
        documentProperties.PropertyName = PropertyName;
        documentProperties.Type = Type;
        documentProperties.editedBy = editedByUser;
        const updatedDocumentProperties = await documentProperties.save();
        return {success : true, documentProperties:updatedDocumentProperties};
    }
    catch(error){
        console.error("Error in updating document properties is", error);
        return {success : false, message : error.message };
    }
}

//instance for toggle: 
    // [One with access is toggling i.e changing the isActive status of the documentProperties
    // (documentPropertiesId) is the mongo _id of particluar documentProperties document sent by frontend
    //toggledByUser is the id of the person toggling the documentProperties ]
documentPropertiesSchema.methods.toggleDocumentProperties = async function ({toggledByUser, documentPropertiesId}){
    try{
        const documentProperties = await this.constructor.findOne({_id : documentPropertiesId, deletedAt : null}); //ensuring document isnt deleted
        if (!documentProperties) return {success : false, message: "Document properties don't exist"};
        documentProperties.isActive = !documentProperties.isActive;
        documentProperties.editedBy = toggledByUser;
        const toggledDocumentProperties = await documentProperties.save();
        return { status: true, documentProperties: toggledDocumentProperties };
    }
    catch(error){
        console.error("Error toggling Document properties is :", error);
        return { status: false, message: error.message };
    }

}

const documentPropertiesModel = mongoose.model("documentproperties", documentPropertiesSchema);
module.exports = { documentPropertiesModel ,documentPropertiesSchema };

