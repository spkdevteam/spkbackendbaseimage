const express = require("express")
const createApiMaster = require("../controller/apiMaster/postApiMaster.controller")
const authentication = require("../middleware/authToken")
const deleteApiMaster = require("../controller/apiMaster/deleteApiMaster.controller")
const {editAPIMaster, toggleApiMaster} = require("../controller/apiMaster/editApiMaster.controller")
const {getAllApiMaster, getApiMasterById} = require("../controller/apiMaster/getApiMaster.controller")

const router = express.Router()

router
    .post("/create", createApiMaster)
    .delete("/delete/:id/:clientId", deleteApiMaster)
    .patch("/edit", editAPIMaster)
    .get("/get-all/:apiName/:clientId/", getAllApiMaster)
    .get("/getById/:clientId/:id", getApiMasterById)
    .patch("/toggleStatus", toggleApiMaster)

module.exports = router