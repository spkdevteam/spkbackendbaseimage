const express = require("express")
const {getAllUser, getUserById } = require("../controller/user/getUser.controller")
const {signInUser, signup} = require("../controller/user/postUserSign.controller")
const updateUser = require("../controller/user/updateUser.controller")
const deleteUser = require("../controller/user/deleteUser.controller")
const {forgot_password,verify_otp,reset_password} = require('../controller/user/postPasswordFunctionality.controller')
const router = express.Router();
const logOutUser = require("../controller/user/logOutUser.controller")
const getUserByDepartment = require("../controller/user/getUserByDepartment.controller")
const getUserByDesignation = require("../controller/user/getUserByDesignation.controller")
const getUserByCompanyId = require("../controller/user/getUserByCompanyId.controller")
const getUserByRoleId = require("../controller/user/getUserByRoleId.controller")
const getEmployeeByPermission = require("../controller/user/getEmployeeByPermission.controller")
const updateUserDesignation = require("../controller/user/updateUserDesignation.controller")
const pendingDocumentSubmissionByUser = require("../controller/user/pendingDocumentSubmissionByUser.controller")
const verifyUser = require("../controller/user/verifyUser.controller")

router
<<<<<<< HEAD
 
.patch("/edit", updateUser)
.delete("/delete/:clientId/:id", deleteUser)
.post("/forgot-password", forgot_password)
.post("/verify-otp", verify_otp)
.post("/reset-password", reset_password) 
.get("/get-all/:clientId", getAllUser)
.get("/getId/:clientId/:id", getUserById)
.post("/create", signup)
.post("/signin", signInUser) 
.post("/logout", logOutUser)
=======
    .get("/get-all/:clientId", getAllUser)
    .get("/getId/:clientId/:id", getUserById)
    .post("/create", signup)
    .post("/signin", signInUser)
    .patch("/edit", updateUser)
    .delete("/delete/:clientId/:id", deleteUser)
    .post("/logout", logOutUser)
    .get("/getByDept/:clientId",getUserByDepartment)
    .get("/getByDesignation/:clientId/:designationId", getUserByDesignation)
    .get("/getByCompany/:clientId/:companyId", getUserByCompanyId)
    .get("/getByRole/:clientId/:roleId", getUserByRoleId)
    .get("/getByPermission/:clientId/:roleId/:permissionId", getEmployeeByPermission)
    .put("/updateByDesignation", updateUserDesignation)
    .get("/pendingDocument/:clientId/:role", pendingDocumentSubmissionByUser)
    .patch("/isVerify", verifyUser)
>>>>>>> origin/new_pragya

module.exports = router
