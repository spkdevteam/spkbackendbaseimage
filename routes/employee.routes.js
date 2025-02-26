const express = require("express")
const {employeeCreate, employeeSignIn} = require("../controller/employee/employeeCreate.controller")
const employeeUpdate = require("../controller/employee/employeeUpdate.controller")
const {employeeGetAll, employeeGetById} = require("../controller/employee/employeeGet.controller")

const router = express.Router()

router.post("/create", employeeCreate)
router.post("/signIn", employeeSignIn)
router.put("/edit", employeeUpdate)
router.get("/getAll/:clientId", employeeGetAll)
router.get("/getById/:clientId/:id", employeeGetById)

module.exports = router