const express = require("express")
const createPage = require("../controller/pagesMaster/postCreatePagesMaster.controller")
const editPage = require("../controller/pagesMaster/putEditPagesMaster.controller")
const deletePage = require("../controller/pagesMaster/deletePagesMaster.controller")
const togglePage = require("../controller/pagesMaster/togglePagesMaster.controller")
const getPaginatedPagesMaster = require("../controller/pagesMaster/getPaginatedPagesMaster.controller")
const getOnePagesMaster = require("../controller/pagesMaster/getOnePagesMaster.controller")
const addUser = require("../middleware/user/addUser");


const router = express.Router();

router
    .post("/createPageMaster", addUser, createPage)
    .put("/editPageMaster", addUser, editPage)
    .delete("/deletePageMaster/:pageId/:clientId", addUser, deletePage)
    .patch("/togglePageMaster", addUser, togglePage)
    .get("/getPaginatedPageMaster/:clientId", getPaginatedPagesMaster)
    .get("/getOnePageMaster/:pageId/:clientId", getOnePagesMaster)
    
    

module.exports = router;
