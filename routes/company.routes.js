const express = require("express")
const {signup} = require("../controller/company/postCompanySign.controller")
const {getAllCompany, getCompanyById} = require("../controller/company/getCompany.controller")
const editCompany = require("../controller/company/editCompany.controller")
const deleteCompany = require("../controller/company/deleteCompany.controller")

const router = express.Router()

router
    .post("/create", signup)
    .get("/get-all/:clientId", getAllCompany)
    .get("/getByCompanyId/:clientId/:id", getCompanyById)
    .put("/editCompany",editCompany)
    .delete("/deleteCompany/:clientId/:id", deleteCompany)

module.exports = router