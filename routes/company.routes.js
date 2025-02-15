const express = require("express")
const signup = require("../controller/company/postCompanySign.controller")

const router = express.Router()

router.post("/", signup)
module.exports = router