const express = require("express");
const createApiMaster = require("../controller/apiMaster/createApiMaster.controller");
const addUser = require("../middleware/user/addUser");
const editApiMaster = require("../controller/apiMaster/editApiMaster.controller");
const deleteApiMaster = require("../controller/apiMaster/deleteApiMaster.controller");
const getOneApiMaster = require("../controller/apiMaster/getOneApiMaster.controller");
const getPaginatedApi = require("../controller/apiMaster/getPaginatedApi.controller");
const toggleApiStatus = require("../controller/apiMaster/toggleApiStatus.controller");

const router = express.Router();

router
    .post("/createApi", addUser, createApiMaster)
    .put("/editApi", addUser, editApiMaster)
    .patch("/toggleApi/", addUser, toggleApiStatus)
    .delete("/deleteApi/:apiId/:clientId", addUser, deleteApiMaster)
    .get("/getOneApi/:apiId/:clientId", getOneApiMaster)
    .get("/getPaginatedApi/:clientId", getPaginatedApi)


module.exports = router;
