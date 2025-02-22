const express = require("express");
const createDesignation = require("../controller/designation/postCreateDesignation.controller");
const deleteDesignation = require("../controller/designation/deleteDesignation.controller");
const getOneDesignation = require("../controller/designation/getOneDesignation.controller");
const editOneDesignation = require("../controller/designation/editOneDesignation.controller");
const getPaginatedDesignation = require("../controller/designation/getPaginatedDesignation.controller");

const router = express.Router();


router
    .post("/createDesignation", createDesignation)
    .delete("/deleteDesignation/:id/:clientId", deleteDesignation)
    .patch("/editOneDesignation", editOneDesignation)
    .get("/getOneDesignation/:id/:clientId", getOneDesignation)
    .get("/getPaginatedDesignation/:clientId", getPaginatedDesignation)


module.exports = router;