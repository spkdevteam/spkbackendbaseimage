const express = require("express");
const createDepartment = require("../controller/department/postDepartment.controller");
const deleteDepartment = require("../controller/department/deleteDepartment.controller");
const getOneDepartment = require("../controller/department/getOneDepartment.controller");
const editOneDepartment = require("../controller/department/editOneDepartment.controller");
const getPaginatedDepartment = require("../controller/department/getPaginatedDepartment.controller");
const addUser = require("../middleware/user/addUser");



const router = express.Router();

router.post("/createDept", addUser, createDepartment)
      .patch("/editOneDepartment", editOneDepartment)
      .delete("/deleteDepartment/:id/:clientId", deleteDepartment)
      .get("/getOneDepartment/:id/:clientId", getOneDepartment)
      .get("/getPaginated/:clientId", getPaginatedDepartment);


module.exports = router;