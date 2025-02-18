const express = require("express")
const createApiMaster = require("../controller/apiMaster/postApiMaster.controller")
const authentication = require("../middleware/authToken")
const deleteApiMaster = require("../controller/apiMaster/deleteApiMaster.controller")

const router = express.Router()

router.post("/", createApiMaster)
// router.delete("/clientId/:id", deleteApiMaster)

module.exports = router