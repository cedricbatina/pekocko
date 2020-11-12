const express = require("express");
const router = express.Router(); // creating an express router

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router; // exporting the router
