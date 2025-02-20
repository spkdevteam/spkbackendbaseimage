const express = require("express");
const createDepartment = require("../controller/department/postDepartment.controller");
const deleteController = require("../controller/department/deleteDepartment.controller");
const getOneDepartment = require("../controller/department/getOneDepartment.controller");
const editOneDepartment = require("../controller/department/editOneDepartment.controller");
const getPaginatedDepartment = require("../controller/department/getPaginatedDepartment.controller");



const router = express.Router();

router.post("/createDept", createDepartment)
      .put("/editOneDepartment", editOneDepartment)
      .delete("/deleteDepartment/:id/:clientId", deleteController)
      .get("/getOneDepartment/:id/:clientId", getOneDepartment)
      .get("/getPaginated/:clientId", getPaginatedDepartment);


module.exports = router;