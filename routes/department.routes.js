const express = require("express");
const createDepartment = require("../controller/department/postDepartment.controller");
const deleteDepartment = require("../controller/department/deleteDepartment.controller");
const getOneDepartment = require("../controller/department/getOneDepartment.controller");
const editOneDepartment = require("../controller/department/editOneDepartment.controller");
const getPaginatedDepartment = require("../controller/department/getPaginatedDepartment.controller");
const addUser = require("../middleware/user/addUser");
const toggleDepartment = require("../controller/department/toggleDepartment.controller");



const router = express.Router();

router.post("/createDept", addUser, createDepartment)
      .put("/editOneDepartment", addUser, editOneDepartment)
      .delete("/deleteDepartment/:departmentId/:clientId", addUser, deleteDepartment)
      .get("/getOneDepartment/:id/:clientId", getOneDepartment)
      .get("/getPaginated/:clientId", getPaginatedDepartment)
      .patch("/toggleDepartment", addUser, toggleDepartment)


module.exports = router;