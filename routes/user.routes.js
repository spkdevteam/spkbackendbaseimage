const express = require("express")
const {getAllUser, getUserById } = require("../controller/user/getUser.controller")
const {signInUser, signup} = require("../controller/user/postUserSign.controller")
const updateUser = require("../controller/user/updateUser.controller")
const deleteUser = require("../controller/user/deleteUser.controller")

const router = express.Router()

router.get("/get-all/:clientId", getAllUser)
router.get("/getId/:clientId/:id", getUserById)
router.post("/create", signup)
router.post("/signin", signInUser)
router.patch("/edit", updateUser)
router.delete("/delete/:clientId/:id", deleteUser)

module.exports = router