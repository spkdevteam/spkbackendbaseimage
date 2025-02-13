const express = require("express")
const {getAllUser, findUser } = require("../controller/user/getUser.controller")

const router = express.Router()

router.get("/", getAllUser)
// router.get("/finduser",findUser)

module.exports = router