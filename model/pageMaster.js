const mongoose = require("mongoose")
const { Types } = mongoose;
const ObjectId = Types.ObjectId;

const pageMasterSchema = mongoose.Schema({
     
         
            menuName: {
                type: String,
                required: true,
                // unique: true
            },
            pathName: {
                type: String,
                required: true,
                // unique: true
            },
            reporting: {
                type: String,
                required: true
            },
            companyId: {type: ObjectId, ref: "company", index: true},

     
    isActive: { type: Boolean, default: true },
    createdBy: { type: ObjectId, ref: "user", index: true },
    deletedAt: { type: Date, default: null, index: true },
    deletedBy: { type: ObjectId, ref: "user", index: true },
    editedBy: { type: ObjectId, ref: "user", index: true },
    oldId: { type: ObjectId, index: true, default: null }

},
    {
        timestamps: true
    }
);

//instance for toggle
pageMasterSchema.statics.togglePagesMaster = async function ({toggledByUserId, pageId, clientId}) {
    try {
        const fetchedPage = await this.findOne({_id : pageId, deletedAt : null});
        if (!fetchedPage) return {status : false, message : "Requested page can't be found!!"};
        fetchedPage.editedBy = toggledByUserId;
        fetchedPage.isActive = !fetchedPage.isActive;
        const toggledPage = await fetchedPage.save();
        return { status: true, pages : toggledPage}; //check the pages.status inside services
        
    } catch (error) {
        return { status: false, message: "Failed to toggle page status", error: error.message }
    }
};




//instance for softDelete pagesMaster
pageMasterSchema.statics.softDeletePagesMaster = async function ({deletedByUserId, pageId, clientId}) {
    try {
        const fetchedPage = await this.findOne({_id : pageId, deletedAt : null});
        if (!fetchedPage) return {status : false, message : "Requested page can't be found or already deleted!!"};
        fetchedPage.deletedBy = deletedByUserId;
        fetchedPage.deletedAt = new Date();
        const deletedPage = await fetchedPage.save();
        return { status: true, pages : deletedPage}; //check the pages.status inside services
    } catch (error) {
        return { status: false, message:  error?.message||"Failed to delete page!!" };
    }
};

//instance for editing pagesMaster
pageMasterSchema.statics.editPagesMaster = async function ({ menuName, pathName, reporting, editedByUserId, pageId, clientId, companyId}) {
    try {
        //checking if Document exits with corresponding pageId:
        const fetchedPage = await this.findOne({_id : pageId, deletedAt : null});
        if (!fetchedPage) return {status : false, message : "Requested page can't be found!!"};
        //Unique logic : checking if pathName & menuName values conflicts with any other existing document othet than the one we are trying to edit right now:
        const conflictingPage = await this.findOne({
            $or : [{menuName : menuName,}, {pathName : pathName}],
            deletedAt : null,
            _id : {$ne : pageId}
        })
        if(conflictingPage) return ({status : false , message : `Page with ${conflictingPage?.menuName === menuName ? "menuName : " + menuName : ""}${conflictingPage?.pathName === pathName ? " pathName : " + pathName : ""} already exists!!`});
        //edit starts:
        fetchedPage.menuName = menuName;
        fetchedPage.pathName = pathName;
        fetchedPage.reporting = reporting;
        fetchedPage.editedBy = editedByUserId;
        fetchedPage.companyId = companyId;


        const editedPage = await fetchedPage.save();
        return { status: true, pages : editedPage}; //check the pages.status inside services
    } catch (error) {
        return { status: false, message:  error?.message||"Failed to edit page!!" };
    }
};
 
    //instance for inserting pagesMaster:
pageMasterSchema.statics.insertPagesMaster = async function ({ menuName, pathName, reporting, createdByUserId, _id = null, clientId, companyId }) {
    try {
        // pathName & menuName unique and document is non deleted checking:
        const ifExistingPage = await this.findOne({
            $or : [{menuName : menuName,}, {pathName : pathName}],
            deletedAt : null
        });
        console.log("ifExistingPageifExistingPage==>>",ifExistingPage);
        
        if (ifExistingPage) return ({status : false , message : `Page with ${ifExistingPage?.menuName === menuName ? "menuName : " + menuName : ""}${ifExistingPage?.pathName === pathName ? " pathName : " + pathName : ""} already exists!!`});

        const newPageMaster = new this({
            menuName,
            pathName,
            reporting,
            createdBy:createdByUserId,
            companyId
        });
        if (_id)//if oldId exists
        {
            newPageMaster.oldId = _id; 
        }
        const savePageMaster = await newPageMaster.save();
        // if(!savePageMaster)  return { status: false, message: "Unable to create page", pages : savePageMaster } 
        return { status: true, pages : savePageMaster}; //check the pages.status inside services
    } catch (error) {
        console.log("error during inserting pagesMaster=>",error);
        return { status: false, message: error?.message || "Failed to create page!!" }
    }
};




const pageMasterModel = mongoose.model("Page", pageMasterSchema);
module.exports = { pageMasterModel,pageMasterSchema };