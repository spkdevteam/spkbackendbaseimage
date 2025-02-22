const express = require("express")
const {getAllUser, getUserById } = require("../controller/user/getUser.controller")
const {signInUser, signup} = require("../controller/user/postUserSign.controller")
const updateUser = require("../controller/user/updateUser.controller")
const deleteUser = require("../controller/user/deleteUser.controller")

const router = express.Router()

router
    .get("/get-all/:clientId", getAllUser)
    .get("/getId/:clientId/:id", getUserById)
    .post("/create", signup)
    .post("/signin", signInUser)
    .patch("/edit", updateUser)
    .delete("/delete/:clientId/:id", deleteUser)

module.exports = router