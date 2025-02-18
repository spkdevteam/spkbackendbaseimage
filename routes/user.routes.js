const express = require('express');
const { getAllUser, getUserById } = require('../controller/user/getUser.controller');
const { signup, signInUser } = require('../controller/user/postUserSign.controller');



const router = express.Router();

router.get("/", getAllUser)
.get("/:id", getUserById)
.post("/", signup)
.post("/signin", signInUser)


module.exports = router;
