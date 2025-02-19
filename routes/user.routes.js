const express = require('express');
const { getAllUser, getUserById } = require('../controller/user/getUser.controller');
const { signup, signInUser } = require('../controller/user/postUserSign.controller');
const { forgot_password, verify_otp, reset_password } = require('../controller/user/postPasswordFunctionality.controller');



const router = express.Router();

router.get("/", getAllUser)
.get("/:id", getUserById)
.post("/", signup)
.post("/signin", signInUser)
.post("/forgot-password", forgot_password)
.post("/verify-otp", verify_otp)
.post("/reset-password", reset_password);

module.exports = router
