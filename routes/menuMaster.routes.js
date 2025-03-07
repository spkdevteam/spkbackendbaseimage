const express = require("express");
const createMenuMaster = require("../controller/menuMaster/createMenuMaster.controller");
const addUser = require("../middleware/user/addUser");
const editMenuMaster = require("../controller/menuMaster/editMenuMaster.controller");
const deleteMenuMaster = require("../controller/menuMaster/deleteMenuMaster.controller");
const getMenuMaster = require("../controller/menuMaster/getMenuMaster.controller");
const getPaginatedMenuMaster = require("../controller/menuMaster/getPaginatedMenuMaster.controller");
const toggleMenuStatus = require("../controller/menuMaster/toggleMenuStatus.controller");

const router = express.Router();

router
    .post("/createMenu",addUser, createMenuMaster)
    .put("/editMenu",addUser, editMenuMaster)
    .patch("/toggleMenu",addUser, toggleMenuStatus)
    .delete("/deleteMenu/:menuId/:clientId",addUser, deleteMenuMaster)
    .get("/getMenu/:menuId/:clientId", getMenuMaster)
    .get("/getPaginatedMenu/:clientId", getPaginatedMenuMaster)

module.exports = router;