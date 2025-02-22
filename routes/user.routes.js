const express = require("express")
const {getAllUser, getUserById } = require("../controller/user/getUser.controller")
const {signInUser, signup} = require("../controller/user/postUserSign.controller")
const updateUser = require("../controller/user/updateUser.controller")
const deleteUser = require("../controller/user/deleteUser.controller")
<<<<<<< HEAD
const {forgot_password,verify_otp,reset_password} = require('../controller/user/postPasswordFunctionality.controller')
const router = express.Router();
=======
const logOutUser = require("../controller/user/logOutUser.controller")
>>>>>>> origin/new_pragya

router.get("/get-all/:clientId", getAllUser)
router.get("/getId/:clientId/:id", getUserById)
router.post("/create", signup)
router.post("/signin", signInUser)
.patch("/edit", updateUser)
.delete("/delete/:clientId/:id", deleteUser)

<<<<<<< HEAD
.post("/forgot-password", forgot_password)
.post("/verify-otp", verify_otp)
.post("/reset-password", reset_password);
=======
router
    .get("/get-all/:clientId", getAllUser)
    .get("/getId/:clientId/:id", getUserById)
    .post("/create", signup)
    .post("/signin", signInUser)
    .patch("/edit", updateUser)
    .delete("/delete/:clientId/:id", deleteUser)
    .post("/logout", logOutUser)
>>>>>>> origin/new_pragya

module.exports = router
