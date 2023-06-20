const express = require("express");
const userCont = require("../controller/userController");
const router = express.Router();
const User = require("../models/user");

router.get("/user", userCont.getUser);
router.get("/user/:id", userCont.getUserOne);
router.post("/user", userCont.createUser);
router.put("/user/:id", userCont.updateUser);
router.delete("/user/:id", userCont.deleteUser);

module.exports = router;
