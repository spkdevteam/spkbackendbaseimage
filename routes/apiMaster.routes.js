const express = require("express")
const createApiMaster = require("../controller/apiMaster/postApiMaster.controller")
const authentication = require("../middleware/authToken")
const deleteApiMaster = require("../controller/apiMaster/deleteApiMaster.controller")
const editAPIMaster = require("../controller/apiMaster/editApiMaster.controller")
const getAllApiMaster = require("../controller/apiMaster/getApiMaster.controller")

const router = express.Router()

router.post("/create", createApiMaster)
router.delete("/delete/:id/:client", deleteApiMaster)
router.put("/edit", editAPIMaster)
// router.get("/", getAllApiMaster)


module.exports = router