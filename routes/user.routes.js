const express = require("express")
const {getAllUser, getUserById } = require("../controller/user/getUser.controller")
const {signInUser, signup} = require("../controller/user/postUserSign.controller")

const router = express.Router()

router.get("/", getAllUser)
router.get("/:id", getUserById)
router.post("/", signup)
router.post("/signin", signInUser)


module.exports = router