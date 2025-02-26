const express = require("express");
const createRole = require("../controller/role/createRole.controller");
const editRole = require("../controller/role/editRole.controller");
const deleteRole = require("../controller/role/deleteRole.controller");
const getPaginatedRoles = require("../controller/role/getPaginatedRoles.controller");
const assignPermission = require("../controller/role/assignPermission.controller");
const editPermission = require("../controller/role/editPermission.controller");
const deletePermission = require("../controller/role/deletePermission.controller");
const assignDocument = require("../controller/role/assignDocument.controller");
const editDocument = require("../controller/role/editDocument.controller");
const deleteDocument = require("../controller/role/deleteDocument.controller");
const getPermissionsByRoleId = require("../controller/role/getPermissionsByRoleId.controller");
const getDocumentsByRoleId = require("../controller/role/getDocumentsByRoleId.controller");
const getDocumentsByRole = require("../controller/role/getDocumentsByRole.controller");
const getByRoleId = require("../controller/role/getByRoleId.controller");
const getPermissionByRole = require("../controller/role/getPermissionByRole.controller");


const router = express.Router();

router
    .post("/createRole", createRole)
    .patch("/editRole", editRole)
    .delete("/deleteRole/:roleId/:clientId", deleteRole)
    .get("/getPaginatedRoles/:clientId", getPaginatedRoles)
    .post("/assignPermission", assignPermission)
    .patch("/editPermission", editPermission)
    .delete("/deletePermissions/:roleId/:clientId", deletePermission)
    .post("/assignDocs", assignDocument)
    .patch("/editDocs", editDocument)
    .delete("/deleteDocs/:roleId/:clientId", deleteDocument)
    .get("/getPermissionsByRoleId/:roleId/:clientId", getPermissionsByRoleId)
    .get("/getPermissionByRole/:role/:clientId", getPermissionByRole)
    .get("/getDocsByRoleId/:roleId/:clientId", getDocumentsByRoleId)
    .get("/getDocsByRole/:role/:clientId", getDocumentsByRole)
    .get("/getByRoleId/:roleId/:clientId", getByRoleId)
    

module.exports = router;