const express = require("express");
const createDesignation = require("../controller/designation/postCreateDesignation.controller");
const deleteDesignation = require("../controller/designation/deleteDesignation.controller");
const getOneDesignation = require("../controller/designation/getOneDesignation.controller");
const editOneDesignation = require("../controller/designation/editOneDesignation.controller");
const getPaginatedDesignation = require("../controller/designation/getPaginatedDesignation.controller");
const addUser = require("../middleware/user/addUser");

const router = express.Router();


router
    .post("/createDesignation", addUser, createDesignation)
    .delete("/deleteDesignation/:id/:clientId", deleteDesignation)
    .patch("/editOneDesignation", editOneDesignation)
    .get("/getOneDesignation/:id/:clientId", getOneDesignation)
    .get("/getPaginated/:clientId", getPaginatedDesignation)


module.exports = router;