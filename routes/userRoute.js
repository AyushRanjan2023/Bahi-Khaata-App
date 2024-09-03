const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController.js");

//router object
const router = express.Router();

//Routers
//POST route || login user
router.post("/login", loginController);

//POST METHOD || Register user
router.post("/register", registerController);

module.exports = router;
