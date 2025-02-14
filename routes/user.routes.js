const express = require("express")
const {getAllUser, getUserById } = require("../controller/user/getUser.controller")
const signInUser = require("../controller/user/postUserSignIn.controller")

const router = express.Router()

router.get("/", getAllUser)
router.get("/:id", getUserById)
router.post("/signin", signInUser)


module.exports = router