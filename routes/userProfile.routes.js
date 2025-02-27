const express = require("express")
const updateUserProfile = require("../controller/userPorfile/updateUserProfile.controller")
const getUserProfile = require("../controller/userPorfile/getUserProfile.controller")

const router = express.Router()

router.put("/update", updateUserProfile)
router.get("/getUserProfile/:clientId/:userId", getUserProfile)

module.exports = router