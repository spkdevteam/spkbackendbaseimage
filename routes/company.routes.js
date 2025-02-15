const express = require("express")
const {signup, signin} = require("../controller/company/postCompanySign.controller")
const {getAllCompany, getCompanyById} = require("../controller/company/getCompany.controller")

const router = express.Router()

router.post("/", signup)
router.post("/signin", signin)
router.get("/", getAllCompany)
router.get("/:id", getCompanyById)

module.exports = router